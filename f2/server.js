const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const formidable = require('formidable')
const { getAllCerts, encryptAndSend } = require('./src/utils/encryptedEmail')
const { isAvailable } = require('./src/utils/checkIfAvailable')
const { getData } = require('./src/utils/getData')
const { saveRecord } = require('./src/utils/saveRecord')
const { saveBlob } = require('./src/utils/saveBlob')
const { scanFiles, contentModeratorFiles } = require('./src/utils/scanFiles')
const {
  notifyIsSetup,
  sendConfirmation,
  sendUnencryptedReport,
  submitFeedback,
} = require('./src/utils/notify')
const { formatAnalystEmail } = require('./src/utils/formatAnalystEmail')

// set up rate limiter: maximum of 100 requests per minute (about 12 page loads)
var RateLimit = require('express-rate-limit')
var limiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100,
})

require('dotenv').config()

const emailList = process.env.MAIL_TO
  ? process.env.MAIL_TO.split(',').map(k => k.trim())
  : []

const uidList = process.env.LDAP_UID
  ? process.env.LDAP_UID.split(',').map(k => k.trim())
  : []

// fetch and store certs for intake analysts
getAllCerts(uidList)

const app = express()

const allowedOrigins = [
  'http://dev.antifraudcentre-centreantifraude.ca',
  'http://pre.antifraudcentre-centreantifraude.ca',
  'http://antifraudcentre-centreantifraude.ca',
  'http://centreantifraude-antifraudcentre.ca',
  'http://antifraudcentre.ca',
  'http://centreantifraude.ca',
]

const availableData = {
  numberOfSubmissions: 0,
  numberOfRequests: 0,
  lastRequested: undefined,
}

// These can all be done async to avoid holding up the nodejs process?
async function save(data, res) {
  saveBlob(data)
  data.submissionTime = new Date().toISOString()

  const analystEmail = formatAnalystEmail(data)
  encryptAndSend(uidList, emailList, data, analystEmail)

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

  contentModeratorFiles(data, () => save(data, res))
}

app.get('/', function(req, res, next) {
  if (availableData.numberOfSubmissions >= process.env.SUBMISSIONS_PER_DAY) {
    console.log('Warning: redirecting request to CAFC')
    res.redirect(
      req.subdomains.includes('signalez')
        ? 'http://www.antifraudcentre-centreantifraude.ca/report-signalez-fra.htm'
        : 'http://www.antifraudcentre-centreantifraude.ca/report-signalez-eng.htm',
    )
  } else {
    availableData.numberOfRequests += 1
    availableData.lastRequested = new Date()
    console.log(`New Request. ${JSON.stringify(availableData)}`)
    next()
  }
})
app
  .use(limiter)
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
    res.json({ acceptingReports: isAvailable(availableData) })
  })

  .get('/stats', function(_req, res) {
    res.json({
      acceptingReports: isAvailable(availableData),
      ...availableData,
    })
  })

  .post('/submit', (req, res) => {
    availableData.numberOfSubmissions += 1
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
      if (err) {
        console.warn('ERROR', err)
        throw err
      }
      uploadData(req, res, fields, files)
    })
  })

  .post('/submitFeedback', (req, res) => {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
      if (err) {
        console.warn('ERROR', err)
        throw err
      }
      submitFeedback(fields.json)
    })
    res.send('thanks')
  })

  .get('/privacystatement', function(_req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
  .get('/termsandconditions', function(_req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

// uncomment to allow direct loading of arbitrary pages
// .get('/*', function(_req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

const port = process.env.PORT || 3000
console.log(`Listening at port ${port}`)
app.listen(port)
