// Prep the data for save.

const fs = require('fs')
const crypto = require('crypto')
const { selfHarmWordsScan } = require('./selfHarmWordsScan')
const { generateReportId } = require('./generateReportId')

const padNumber = (x) => `${x}`.padStart(2, 0)

const getFileExtension = (filename) => {
  const a = filename.split('.')
  if (a.length === 1 || (a[0] === '' && a.length === 2)) {
    return ''
  }
  return a.pop().toLowerCase()
}

async function getData(data, files) {
  data.reportId = generateReportId()
  // Clean up the file info we're saving to MongoDB, and record the SHA1 hash so we can find the file in blob storage
  const filesToJson = []
  var i = 0

  for (const file of Object.entries(files)) {
    // Generate and record the SHA1 hash for the file. This way we can find it in blob storage
    var shasum = crypto.createHash('sha1')
    shasum.update(fs.readFileSync(file[1].path))
    const sha1Hash = shasum.digest('hex')

    const fileExtension = getFileExtension(file[1].name)
    const newFilePath =
      fileExtension !== '' ? `${file[1].path}.${fileExtension}` : file[1].path
    if (file[1].path !== newFilePath) fs.renameSync(file[1].path, newFilePath)

    // Record all the file related fields together in one JSON object for simplicity
    filesToJson.push({
      name: file[1].name,
      type: file[1].type,
      size: file[1].size,
      fileDescription: data.evidence.fileDescriptions[i],
      path: newFilePath,
      sha1: sha1Hash,
      // MongoDB had a 16MB document size limit, but CosmosDB only has a 2MB limit so this isn't going to work.
      //blob: Binary(fs.readFileSync(file[1].path)),
    })
    i++
  }

  // Overwrite the empty files array with the file json we built above
  data.evidence.files = filesToJson

  const selfHarmWords = selfHarmWordsScan(data).join(', ')
  if (selfHarmWords) {
    console.warn(`Self harm words detected: ${selfHarmWords}`)
  }
  data.selfHarmWords = selfHarmWords
  const now = new Date()
  const timeZoneOffset = now.getTimezoneOffset() / 60 // convert to hours
  const dateString =
    padNumber(now.getDate()) +
    '/' +
    padNumber(now.getMonth() + 1) +
    '/' +
    `${now.getFullYear()}`
  const timeString =
    padNumber(now.getHours()) + ':' + padNumber(now.getMinutes())
  data.submissionTime = `${dateString} ${timeString} UTC-${timeZoneOffset}`
  data.submissionDate = `${dateString}`
  return data
}

module.exports = { getData, getFileExtension }
