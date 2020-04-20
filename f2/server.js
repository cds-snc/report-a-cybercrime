const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const formidable = require('formidable')
const helmet = require('helmet')
const { unflatten } = require('flat')
const { sanitize } = require('./src/utils/sanitize')
const { encryptAndSend } = require('./src/utils/encryptedEmail')
const { getCertsAndEmail } = require('./src/utils/ldap')
const { isAvailable } = require('./src/utils/checkIfAvailable')
const { getData } = require('./src/utils/getData')
const { saveRecord } = require('./src/utils/saveRecord')
const { getReportCount } = require('./src/utils/saveRecord')
const { saveBlob } = require('./src/utils/saveBlob')
const { serverFieldsAreValid } = require('./src/utils/serverFieldsAreValid')
const { scanFiles, contentModeratorFiles } = require('./src/utils/scanFiles')
const {
  notifyIsSetup,
  sendConfirmation,
  submitFeedback,
} = require('./src/utils/notify')
const { formatAnalystEmail } = require('./src/utils/formatAnalystEmail')
const {
  fileSizePasses,
  fileExtensionPasses,
} = require('./src/utils/acceptableFiles')

// set up rate limiter: maximum of 100 requests per minute (about 12 page loads)
var RateLimit = require('express-rate-limit')
var limiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100,
})

require('dotenv').config()

const uidListInitial = process.env.LDAP_UID
  ? process.env.LDAP_UID.split(',').map((k) => k.trim())
  : []

// certs and emails can be fetched in different order than the original uidListInitial
let emailList = []
let uidList = []
getCertsAndEmail(uidListInitial, emailList, uidList)

// Make sure that everything got loaded.
// TODO: have a proper "system is ready" flag that express uses to deal with requests
// (ex: tell CAFC we're not ready yet, return error code to /ping)
setTimeout(() => {
  if (
    uidListInitial.length === uidList.length &&
    uidListInitial.length === emailList.length
  )
    console.log(`LDAP certs successfully fetched for: ${emailList}`)
  else console.log('ERROR: problem fetching certs from LDAP')
}, 5000)

const app = express()
app.use(helmet())

const allowedOrigins = [
  'https://dev.antifraudcentre-centreantifraude.ca',
  'https://pre.antifraudcentre-centreantifraude.ca',
  'https://antifraudcentre-centreantifraude.ca',
  'https://centreantifraude-antifraudcentre.ca',
  'https://antifraudcentre.ca',
  'https://centreantifraude.ca',
]

let availableData
async function initializeAvailableData() {
  availableData = {
    numberOfSubmissions: await getReportCount(),
    numberOfRequests: 0,
    lastRequested: undefined,
  }
}
const allowedReferrers = [
  'antifraudcentre-centreantifraude.ca',
  'centreantifraude-antifraudcentre.ca',
  'antifraudcentre.ca',
  'centreantifraude.ca',
]

initializeAvailableData()

// These can all be done async to avoid holding up the nodejs process?
async function save(data, res) {
  saveBlob(data)

  const analystEmail = formatAnalystEmail(data)
  encryptAndSend(uidList, emailList, data, analystEmail)

  if (notifyIsSetup && data.contactInfo.email) {
    sendConfirmation(data.contactInfo.email, data.reportId, data.language)
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

app.get('/', async function (req, res, next) {
  availableData.numberOfSubmissions = await getReportCount()
  if (availableData.numberOfSubmissions >= process.env.SUBMISSIONS_PER_DAY) {
    console.warn('Warning: redirecting request to CAFC')
    res.redirect(
      req.subdomains.includes('signalez')
        ? 'https://www.antifraudcentre-centreantifraude.ca/report-signalez-fra.htm'
        : 'https://www.antifraudcentre-centreantifraude.ca/report-signalez-eng.htm',
    )
  } else {
    var referrer = req.headers.referer
    console.log('Referrer:' + referrer)
    if (
      referrer !== undefined &&
      allowedReferrers.indexOf(new URL(referrer).host.toLowerCase()) > -1
    ) {
      availableData.numberOfRequests += 1
      availableData.lastRequested = new Date()
    }
    console.log(`New Request. ${JSON.stringify(availableData)}`)
    next()
  }
})
app
  .use(limiter)
  .use(express.static(path.join(__dirname, 'build')))
  .use(bodyParser.json())
  .use(function (req, res, next) {
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

  .get('/ping', function (_req, res) {
    return res.send('pong')
  })

  .get('/available', function (_req, res) {
    res.json({ acceptingReports: isAvailable(availableData) })
  })

  .get('/stats', function (_req, res) {
    res.json({
      acceptingReports: isAvailable(availableData),
      ...availableData,
    })
  })

  .post('/submit', (req, res) => {
    var form = new formidable.IncomingForm()
    form.parse(req)
    let files = []
    let fields = {}
    form.on('field', (fieldName, fieldValue) => {
      try {
        const rawValue = JSON.parse(fieldValue)
        let cleanValue
        // we have strings and arrays in our data fields
        if (typeof rawValue === 'object') cleanValue = rawValue.map(sanitize)
        else cleanValue = sanitize(rawValue)
        fields[fieldName] = cleanValue
      } catch (error) {
        console.warn(
          `ERROR in /submit: parsing ${fieldName} value of ${fieldValue}: ${error}`,
        )
      }
    })
    form.on('file', function (name, file) {
      if (files.length >= 3)
        console.warn('ERROR in /submit: number of files more than 3')
      else if (!fileSizePasses(file.size))
        console.warn(
          `ERROR in /submit: file ${name} too big (${file.size} bytes)`,
        )
      else if (!fileExtensionPasses(name))
        console.warn(
          `ERROR in /submit: unauthorized file extension in file ${name}`,
        )
      else files.push(file)
    })
    form.on('end', () => {
      if (serverFieldsAreValid(fields)) {
        uploadData(req, res, unflatten(fields, { safe: true }), files)
      } else {
        res.status(422).send('invalid fields') // 422 is "Unprocessable Entity"
      }
    })
  })

  .post('/submitFeedback', (req, res) => {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
      if (err) {
        console.warn('ERROR', err)
        throw err
      }
      submitFeedback(sanitize(JSON.stringify(fields.json)))
    })
    res.send('thanks')
  })

  .get('/privacystatement', function (_req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
  .get('/termsandconditions', function (_req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

// uncomment to allow direct loading of arbitrary pages
// .get('/*', function (_req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

const port = process.env.PORT || 3000
console.info(`Listening at port ${port}`)
app.listen(port)
