const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require('@azure/storage-blob')
const fs = require('fs')
require('dotenv').config()

const account = process.env.BLOB_STORAGE_NAME
const accountKey = process.env.BLOB_STORAGE_KEY

// Use StorageSharedKeyCredential with storage account and account key
// StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
let blobServiceClient
try {
  const sharedKeyCredential = new StorageSharedKeyCredential(
    account,
    accountKey,
  )
  blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net`,
    sharedKeyCredential,
  )
} catch (error) {
  console.warn('WARNING: File storage not configured')
}

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

      for (var x = 0; x < data.evidence.files.length; x++) {
        if (data.evidence.files[x].malwareIsClean) {
          const content = fs.readFileSync(data.evidence.files[x].path)
          // Use SHA1 hash as file name to avoid collisions in blob storage
          const blobName = data.evidence.files[x].sha1
          const blockBlobClient = containerClient.getBlockBlobClient(blobName)
          errorCode = (await blockBlobClient.upload(content, content.length))
            .errorCode
          if (errorCode)
            console.warn(
              `ERROR: Upload report ${data.reportId} file ${data.evidence.files[x].name}, blob ${blobName}: error code ${errorCode}`,
            )
          else
            console.info(
              `Uploaded report ${data.reportId} file ${data.evidence.files[x].name}, blob ${blobName} successfully`,
            )
        } else {
          console.warn(
            `Skipping saving report ${data.reportId} file ${data.evidence.files[x].name} due to malware.`,
          )
        }
      }
    }
  } catch (error) {
    console.warn(`ERROR in saveBlob: ${error}`)
  }
}

module.exports = { saveBlob }
