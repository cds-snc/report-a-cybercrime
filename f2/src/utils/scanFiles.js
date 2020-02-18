const clamd = require('clamdjs')
const fs = require('fs')
const CognitiveServicesCredentials = require('ms-rest-azure')
  .CognitiveServicesCredentials
const ContentModeratorAPIClient = require('azure-cognitiveservices-contentmoderator')

require('dotenv').config()

let serviceKey = process.env.CONTENT_MODERATOR_SERVICE_KEY

if (!serviceKey) console.warn('WARNING: Azure content moderator not configured')

async function scanFiles(data) {
  var scanner = clamd.createScanner(process.env.CLAM_URL, 3310)
  for (const file of Object.entries(data.evidence.files)) {
    //scan file for virus
    var readStream = fs.createReadStream(file[1].path)
    //set timeout for 10000
    await scanner
      .scanStream(readStream, 10000)
      .then(function(reply) {
        file[1].malwareScanDetail = reply
        file[1].malwareIsClean = clamd.isCleanReply(reply)
      })
      .catch(function(reply) {
        file[1].malwareScanDetail = 'ERROR: Unable to perform virus scan'
        file[1].malwareIsClean = false
        console.error('Virus scan failed on ' + data.reportId)
      })
  }
}

async function contentModeratorFiles(data) {
  if (!serviceKey)
    console.warn('Warning: files not scanned with Content Moderator')
  else {
    let credentials = new CognitiveServicesCredentials(serviceKey)
    let client = new ContentModeratorAPIClient(
      credentials,
      'https://canadacentral.api.cognitive.microsoft.com/',
    )

    for (const file of Object.entries(data.evidence.files)) {
      //scan file for virus
      var readStream = fs.createReadStream(file[1].path)
      options = {}
      client.imageModeration.evaluateFileInput(readStream, options, function(
        err,
        result,
        request,
        response,
      ) {
        if (err) {
          console.warn(`Error in Content Moderator: ${err} `)
          file[1].adultClassificationScore = 'Could not scan'
        } else {
          try {
            const contMod = JSON.parse(response.body)
            console.log(contMod)
            file[1].IsImageRacyClassified = contMod.IsImageRacyClassified
            file[1].IsImageAdultClassified = contMod.IsImageAdultClassified
            file[1].adultClassificationScore = contMod.adultClassificationScore
          } catch (error) {
            console.warn(`Error in Content Moderator: ${error} `)
          }
        }
      })
    }
  }
}

module.exports = { scanFiles, contentModeratorFiles }
