// Prep the data for save.

const fs = require('fs')
const crypto = require('crypto')
const { selfHarmWordsScan } = require('../../utils/selfHarmWordsScan')
const { generateReportId } = require('./generateReportId')

async function getData(fields, files) {
  // Extract the JSON from the "JSON" form element
  const data = JSON.parse(fields['json'])

  data.reportId = generateReportId()
  // Clean up the file info we're saving to MongoDB, and record the SHA1 hash so we can find the file in blob storage
  const filesToJson = []
  var i = 0

  for (const file of Object.entries(files)) {
    // Generate and record the SHA1 hash for the file. This way we can find it in blob storage
    var shasum = crypto.createHash('sha1')
    shasum.update(fs.readFileSync(file[1].path))
    const sha1Hash = shasum.digest('hex')

    // Record all the file related fields together in one JSON object for simplicity
    filesToJson.push({
      name: file[1].name,
      type: file[1].type,
      size: file[1].size,
      fileDescription: data.evidence.fileDescriptions[i],
      path: file[1].path,
      sha1: sha1Hash,
      // MongoDB had a 16MB document size limit, but CosmosDB only has a 2MB limit so this isn't going to work.
      //blob: Binary(fs.readFileSync(file[1].path)),
    })
    i++
  }

  // Overwrite the empty files array with the file json we built above
  data.evidence.files = filesToJson

  const selfHarmWords = selfHarmWordsScan(data)
  if (selfHarmWords) {
    console.warn(`Self harm words detected: ${selfHarmWords}`)
  }
  data.selfHarmWords = selfHarmWords
  data.submissionTime = new Date().toISOString()
  return data
}

module.exports = { getData }
