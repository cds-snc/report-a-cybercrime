const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const formidable = require('formidable')
const helmet = require('helmet')
const speakeasy = require('speakeasy')
const { unflatten } = require('flat')
const { sanitize } = require('./src/utils/sanitize')
const { encryptAndSend } = require('./src/utils/encryptedEmail')
const { getCertsAndEmail } = require('./src/utils/ldap')
const availabilityService = require('./src/utils/checkIfAvailable')
const { getData } = require('./src/utils/getData')
const { saveRecord } = require('./src/utils/saveRecord')
const { saveBlob } = require('./src/utils/saveBlob')
const { serverFieldsAreValid } = require('./src/utils/serverFieldsAreValid')
const { scanFiles, contentModeratorFiles } = require('./src/utils/scanFiles')
const { verifyRecaptcha } = require('./src/utils/verifyRecaptcha')
const { getLogger, getExpressLogger } = require('./src/utils/winstonLogger')
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
const { convertImages } = require('./src/utils/imageConversion')

// set up rate limiter: maximum of 100 requests per minute (about 12 page loads)
var RateLimit = require('express-rate-limit')
var limiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100,
})

require('dotenv').config()

const logger = getLogger(__filename)

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
    logger.info(`LDAP certs successfully fetched for: ${emailList}`)
  else logger.error('Problem fetching certs from LDAP')
}, 5000)

const app = express()
app
  .use(helmet())
  .use(helmet.referrerPolicy({ policy: 'same-origin' }))
  .use(
    helmet.featurePolicy({
      features: { geolocation: ["'none'"], camera: ["'none'"] },
    }),
  )
  .use(getExpressLogger())

const allowedOrigins = [
  'https://dev.antifraudcentre-centreantifraude.ca',
  'https://pre.antifraudcentre-centreantifraude.ca',
  'https://antifraudcentre-centreantifraude.ca',
  'https://centreantifraude-antifraudcentre.ca',
  'https://antifraudcentre.ca',
  'https://centreantifraude.ca',
]

// Moved these out of save() and to their own function so we can block on 'saveBlob' to get the SAS link
// without holding up the rest of the 'save' function
async function saveBlobAndEmailReport(data) {
  var converted = await convertImages(data.evidence.files)
  data.evidence.files.push(...converted.filter((file) => file !== null))
  // Await on this because saveBlob generates the SAS link for each file
  await saveBlob(uidList, data)
  const analystEmail = formatAnalystEmail(data)
  encryptAndSend(uidList, emailList, data, analystEmail)
}
// These can all be done async to avoid holding up the nodejs process?
async function save(data, res) {
  await saveBlobAndEmailReport(data)
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
  // Default to false. This represents if a user entered a valid TOTP code
  var isTotpValid = false

  // If the user passed in a TOTP query parm (/?totp=) and the correct
  // env var is set, then verify the code.
  if (req.query.totp && process.env.TOTP_SECRET) {
    // Check the TOTP code against the secret
    isTotpValid = speakeasy.totp.verify({
      secret: process.env.TOTP_SECRET,
      encoding: 'base32',
      token: req.query.totp,
    })
  }

  var referer = req.headers.referer

  if (isTotpValid || availabilityService.requestAccess(referer)) {
    logger.info({
      message: 'New Request',
    })
    next()
  } else {
    logger.info({
      message: 'Redirecting to CAFC',
    })
    res.redirect(
      req.subdomains.includes('signalement')
        ? 'https://www.antifraudcentre-centreantifraude.ca/report-signalez-fra.htm'
        : 'https://www.antifraudcentre-centreantifraude.ca/report-signalez-eng.htm',
    )
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
    res.json({ acceptingReports: availabilityService.isAvailable() })
  })

  .get('/stats', function (_req, res) {
    var data = availabilityService.getAvailableData()
    res.json({
      acceptingReports: availabilityService.isAvailable(),
      ...data,
    })
  })

  .post('/client-logger', (req, res) => {
    if (req.body) {
      if (req.body.level === 'error') {
        logger.error(req.body)
      } else if (req.body.level === 'warn') {
        logger.warn(req.body)
      } else if (req.body.level === 'info') {
        logger.info(req.body)
      } else {
        logger.debug(req.body)
      }
    }
    res.send('OK')
  })
  .post('/submit', (req, res) => {
    availabilityService.incrementSubmissions()
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
        logger.warn(
          `ERROR in /submit: parsing ${fieldName} value of ${fieldValue}: ${error}`,
        )
        logger.error({
          message: `ERROR in /submit: parsing ${fieldName} value of ${fieldValue}`,
          path: '/submit',
          error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
        })
      }
    })
    form.on('file', function (name, file) {
      if (files.length >= 3)
        logger.warn('ERROR in /submit: number of files more than 3')
      else if (!fileSizePasses(file.size))
        logger.warn(
          `ERROR in /submit: file ${name} too big (${file.size} bytes)`,
        )
      else if (!fileExtensionPasses(name))
        logger.warn(
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
        logger.error('ERROR', err)
        throw err
      }
      submitFeedback(sanitize(fields.json))
    })
    res.send('thanks')
  })

  .get('/privacystatement', function (_req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
  .get('/termsandconditions', function (_req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
  .post('/checkToken', (req, res) => {
    new formidable.IncomingForm().parse(req, async (err, fields, files) => {
      if (err) {
        logger.error('ERROR', err)
        throw err
      }
      const token = JSON.parse(fields.json).token
      verifyRecaptcha(token, res)
    })
    //  res.send('thanks')
  })

  // uncomment to allow direct loading of arbitrary pages
  .get('/*', function (_req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

const port = process.env.PORT || 3000
console.info(`Listening at port ${port}`)
app.listen(port)
