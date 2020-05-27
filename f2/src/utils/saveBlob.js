const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  generateBlobSASQueryParameters,
  ContainerSASPermissions,
  SASProtocol,
} = require('@azure/storage-blob')

const nanoid = require('nanoid')
const fs = require('fs')
const exec = require('child_process').exec
const { certFileName } = require('./ldap')
require('dotenv').config()

const account = process.env.BLOB_STORAGE_NAME
const accountKey = process.env.BLOB_STORAGE_KEY

const sasExpiryDays = process.env.BLOB_SAS_DAYS_EXPIRY
const sasIpRangeLower = process.env.BLOB_SAS_IP_LOWER
const sasIpRangeUpper = process.env.BLOB_SAS_IP_UPPER

// Use StorageSharedKeyCredential with storage account and account key
// StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
let blobServiceClient
let sharedKeyCredential
try {
  sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey)
  blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net`,
    sharedKeyCredential,
  )
} catch (error) {
  console.warn('WARNING: File storage not configured')
}

const uidListInitial = process.env.LDAP_UID
  ? process.env.LDAP_UID.split(',').map((k) => k.trim())
  : []

/*
Given 'data' 
*/
async function saveBlob(data) {
  try {
    if (!blobServiceClient && data.evidence.files.length > 0) {
      console.warn(`WARNING: Report ${data.reportId} not able to save files`)
      return
    }
    if (data.evidence.files.length > 0) {
      const containerName = data.reportId.replace('-', '').toLowerCase()
      const containerClient = blobServiceClient.getContainerClient(
        containerName,
      )
      let errorCode = (await containerClient.create()).errorCode
      if (errorCode)
        console.warn(
          `ERROR creating container ${containerName}: error code ${errorCode}`,
        )
      else console.info(`Created container ${containerName} successfully`)

      // Generate service level SAS for a container
      const containerSAS = generateBlobSASQueryParameters(
        {
          containerName, // Required
          permissions: ContainerSASPermissions.parse('r'), // Required
          startsOn: new Date(), // Required
          expiresOn: new Date(new Date().valueOf() + 86400000 * sasExpiryDays), // Optional. 86400000 miliseconds = 1 day
          ipRange: { start: sasIpRangeLower, end: sasIpRangeUpper }, // Optional
          protocol: SASProtocol.Https, // Optional
        },
        sharedKeyCredential, // StorageSharedKeyCredential - `new StorageSharedKeyCredential(account, accountKey)`
      ).toString()

      for (var x = 0; x < data.evidence.files.length; x++) {
        if (data.evidence.files[x].malwareIsClean) {
          // Use SHA1 hash as file name to avoid collisions in blob storage, keep file extension
          const blobName =
            data.evidence.files[x].sha1 +
            '.' +
            data.evidence.files[x].name.split('.').pop() +
            '.p7m'
          const blockBlobClient = containerClient.getBlockBlobClient(blobName)
          encryptFile(
            uidListInitial,
            data.evidence.files[x],
            (file, content) => {
              errorCode = blockBlobClient.upload(content, content.length)
                .errorCode
              if (errorCode)
                console.warn(
                  `ERROR: Upload report ${data.reportId} file ${file.name}, blob ${blobName}: error code ${errorCode}`,
                )
              else
                console.info(
                  `Uploaded report ${data.reportId} file ${file.name}, blob ${blobName} successfully`,
                )
            },
          )
          // Add the SAS URL to the file data structure
          data.evidence.files[x].sasUrl =
            blockBlobClient.url + '?' + containerSAS.toString()
        } else {
          console.warn(
            `Skipping saving report ${data.reportId} file ${file.name} due to malware.`,
          )
        }
      }
    }
  } catch (error) {
    console.warn(`ERROR in saveBlob: ${error}`)
  }
}

/* Encrypts the file at file.path for user specified by uid. 
Calls the 'callback' function after with encrypted file. */
const encryptFile = (uids, file, callback) => {
  const openssl = 'openssl smime -des3 -encrypt -binary'
  const messageFile = `${file.path}`
  const encryptedFile = messageFile + '.p7m'

  const cerFileList = []
  uids.forEach((uid) => {
    cerFileList.push(certFileName(uid))
  })
  const certFiles = cerFileList.join(' ')

  exec(
    `${openssl} -in ${messageFile} -out ${encryptedFile} ${certFiles}`,
    { cwd: process.cwd() },
    function (error, _stdout, stderr) {
      if (error) throw error
      else if (stderr) console.warn(stderr)
      else {
        console.log('Encrypted File: ' + file.path)
        const attachment = fs.readFileSync(encryptedFile)
        fs.unlink(messageFile, () => {})
        fs.unlink(encryptedFile, () => {})
        callback(file, attachment)
      }
    },
  )
}

module.exports = { saveBlob }
