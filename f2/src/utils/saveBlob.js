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
const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey)
const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net`,
  sharedKeyCredential,
)

async function saveBlob(data) {
  console.log(data.reportId)
  const containerName = data.reportId.replace('-', '').toLowerCase()
  console.log(containerName)
  const containerClient = blobServiceClient.getContainerClient(containerName)
  const createContainerResponse = await containerClient.create()
  console.log(
    `Create container ${containerName} successfully`,
    createContainerResponse.requestId,
  )

  for (var x = 0; x < data.evidence.files.length; x++) {
    console.log(data.evidence.files[x])
    const content = fs.readFileSync(data.evidence.files[x].path)
    // Use SHA1 hash as file name to avoid collisions in blob storage
    const blobName = data.evidence.files[x].sha1
    const blockBlobClient = containerClient.getBlockBlobClient(blobName)
    const uploadBlobResponse = await blockBlobClient.upload(
      content,
      content.length,
    )
    console.log(
      `Upload block blob ${blobName} successfully`,
      uploadBlobResponse.requestId,
    )
  }
}

module.exports = { saveBlob }
