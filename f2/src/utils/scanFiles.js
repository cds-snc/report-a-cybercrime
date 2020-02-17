const clamd = require('clamdjs')
const fs = require('fs')
require('dotenv').config()

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

module.exports = { scanFiles }
