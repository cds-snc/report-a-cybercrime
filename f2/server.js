const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const formidable = require('formidable')
const { getAllCerts, encryptAndSend } = require('./src/utils/encryptedEmail')

const { getData } = require('./src/utils/getData')
const { saveRecord } = require('./src/utils/saveRecord')
const { saveBlob } = require('./src/utils/saveBlob')
const { scanFiles } = require('./src/utils/scanFiles')

const {
  notifyIsSetup,
  sendConfirmation,
  sendUnencryptedReport,
} = require('./utils/notify')

const { formatAnalystEmail } = require('./src/utils/formatAnalystEmail')

require('dotenv').config()

// fetch and store certs for intake analysts
getAllCerts(process.env.LDAP_UID)

const app = express()

const allowedOrigins = [
  'http://dev.antifraudcentre-centreantifraude.ca',
  'http://pre.antifraudcentre-centreantifraude.ca',
  'http://antifraudcentre-centreantifraude.ca',
  'http://centreantifraude-antifraudcentre.ca',
  'http://antifraudcentre.ca',
  'http://centreantifraude.ca',
]

// These can all be done async to avoid holding up the nodejs process?
async function save(data, res) {
  saveBlob(data)
  data.submissionTime = new Date().toISOString()

  const analystEmail = formatAnalystEmail(data)
  encryptAndSend(process.env.LDAP_UID, analystEmail)

  if (notifyIsSetup && data.contactInfo.email) {
    sendConfirmation(data.contactInfo.email, data.reportId)
    if (process.env.SEND_UNENCRYPTED_REPORTS === 'yes')
      sendUnencryptedReport(data.contactInfo.email, analystEmail)
  }
  saveRecord(data, res)
}

const uploadData = async (req, res, fields, files) => {
  // Get all the data in the format we want, this function blocks because we need the data
  var data = await getData(fields, files)

  // Await here because we also need these results before saving
  await scanFiles(data)

  // Save the data, e-mail it, etc.. This is async to avoid holding up nodejs from other requests
  save(data, res)
}

let count = 0

app
  .use(express.static(path.join(__dirname, 'build')))
  .use(bodyParser.json())
  .use(function(req, res, next) {
    var origin = req.headers.origin
    // Can only set one value of Access-Control-Allow-Origin, so we need some code to set it dynamically
    if (
      origin !== undefined &&
      allowedOrigins.indexOf(origin.toLowerCase()) > -1
    ) {
      res.header('Access-Control-Allow-Origin', origin)
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
      )
    }
    next()
  })

  .get('/ping', function(_req, res) {
    return res.send('pong')
  })

  .get('/available', function(_req, res) {
    count += 1
    switch (count % 3) {
      case 1:
        res.json({ acceptingReports: true })
        break
      case 2:
        res.json({ acceptingReports: false })
        break
      default:
        res.status(404).send('Not found')
    }
  })

  .post('/submit', (req, res) => {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error', err)
        throw err
      }
      uploadData(req, res, fields, files)
    })
  })

  .get('/*', function(_req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

const port = process.env.PORT || 3000
console.log(`Listening at port ${port}`)
app.listen(port)
