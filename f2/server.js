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
const { isAvailable } = require('./src/utils/checkIfAvailable')
const { getData } = require('./src/utils/getData')
const { saveRecord } = require('./src/utils/saveRecord')
const { getReportCount } = require('./src/utils/saveRecord')
const { saveBlob } = require('./src/utils/saveBlob')
const { serverFieldsAreValid } = require('./src/utils/serverFieldsAreValid')
const { scanFiles, contentModeratorFiles } = require('./src/utils/scanFiles')
const { verifyRecaptcha } = require('./src/utils/verifyRecaptcha')
const logger = require('./src/utils/winstonLogger')
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
const expressWinston = require('express-winston')
const winston = require('winston')
const { convertImages } = require('./src/utils/imageConversion')

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
app
  .use(helmet())
  .use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          'www.google-analytics.com',
          'www.googletagmanager.com',
          'www.google.com',
          'www.gstatic.com',
        ],
        styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
        fontSrc: ["'self'", 'fonts.gstatic.com'],
        frameSrc: ['www.google.com'],
      },
    }),
  )
  .use(helmet.referrerPolicy({ policy: 'same-origin' }))
  .use(
    helmet.featurePolicy({
      features: { geolocation: ["'none'"], camera: ["'none'"] },
    }),
  )
  .use(
    expressWinston.logger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.json(),
      ),
      meta: true, // optional: control whether you want to log the meta data about the request (default to true)
      expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
      colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).

      dynamicMeta: (req, res) => {
        const httpRequest = {}
        const meta = {}
        if (req) {
          meta.httpRequest = httpRequest
          httpRequest.remoteIpv4andv6 = req.ip // this includes both ipv6 and ipv4 addresses separated by ':'
          httpRequest.remoteIpv4 =
            req.ip.indexOf(':') >= 0
              ? req.ip.substring(req.ip.lastIndexOf(':') + 1)
              : req.ip // just ipv4
          httpRequest.requestSize = req.socket.bytesRead
          httpRequest.referrer = req.get('Referrer')
        }
        return meta
      },

      ignoreRoute: function (req, res) {
        return false
      }, // optional: allows to skip some log messages based on request and/or response
    }),
  )

const allowedOrigins = [
  'https://dev.antifraudcentre-centreantifraude.ca',
  'https://pre.antifraudcentre-centreantifraude.ca',
  'https://antifraudcentre-centreantifraude.ca',
  'https://centreantifraude-antifraudcentre.ca',
  'https://antifraudcentre.ca',
  'https://centreantifraude.ca',
]

let availableData

availableData = {
  numberOfSubmissions: 0,
  numberOfRequests: 0,
  lastRequested: undefined,
}
const allowedReferrers = [
  'antifraudcentre-centreantifraude.ca',
  'centreantifraude-antifraudcentre.ca',
  'antifraudcentre.ca',
  'centreantifraude.ca',
]

getReportCount(availableData)
setTimeout(() => console.log({ availableData }), 1000)

// Moved these out of save() and to their own function so we can block on 'saveBlob' to get the SAS link
// without holding up the rest of the 'save' function
async function saveBlobAndEmailReport(data) {
  var converted = await convertImages(data.evidence.files)
  data.evidence.files.push(...converted.filter((file) => file !== null))
  // Await on this because saveBlob generates the SAS link for each file
  await saveBlob(data)
  const analystEmail = formatAnalystEmail(data)
  encryptAndSend(uidList, emailList, data, analystEmail)
}
// These can all be done async to avoid holding up the nodejs process?
async function save(data, res) {
  saveBlobAndEmailReport(data)
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
  await getReportCount(availableData)

  // Default to false. This represents if a user entered a valid TOTP code
  var isTotpValid = false
  var validReferer = false

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

  if (process.env.CHECK_REFERER) {
    var referer = req.headers.referer
    validReferer = referer ? allowedReferrers.includes(new URL(referer).host.toLowerCase()) : referer
  } else {
    validReferer = true
  }

  var maxSubmissions = availableData.numberOfSubmissions >= process.env.SUBMISSIONS_PER_DAY

  var availabilityCheck = {
    "SUBMISSIONS_PER_DAY":process.env.SUBMISSIONS_PER_DAY,
    "NUMBER_OF_SUBMISSIONS": availableData.numberOfSubmissions,
    "MAX_SUBMISSIONS": maxSubmissions,
    "CHECK_REFERER": process.env.CHECK_REFERER,
    "VALID_REFERER": validReferer,
    "TOTP_SECRET": process.env.TOTP_SECRET,
    "TOTP_VALID": isTotpValid
  }

  logger.info({
    message: 'Availability Check',
    availabilityCheck: availabilityCheck
  })

  // If user had a TOTP code, bypass the submissions_per_day restriction
  if ( (maxSubmissions || !validReferer) && !isTotpValid ) {
    logger.info({
      message: 'Redirecting to CAFC'
    })
    res.redirect(
      req.subdomains.includes('signalement')
        ? 'https://www.antifraudcentre-centreantifraude.ca/report-signalez-fra.htm'
        : 'https://www.antifraudcentre-centreantifraude.ca/report-signalez-eng.htm',
    )
  } else {
    availableData.numberOfRequests += 1
    availableData.lastRequested = new Date()
    logger.info({
      message: 'New Request',
      availableData: availableData,
    })
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
    availableData.numberOfSubmissions += 1
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
        logger.error({
          message: `ERROR in /submit: parsing ${fieldName} value of ${fieldValue}`,
          path: '/submit',
          error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
        })
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
  .post('/checkToken', (req, res) => {
    new formidable.IncomingForm().parse(req, async (err, fields, files) => {
      if (err) {
        console.warn('ERROR', err)
        throw err
      }
      const token = JSON.parse(fields.json).token
      verifyRecaptcha(token, res)
    })
    //  res.send('thanks')
  })

// uncomment to allow direct loading of arbitrary pages
// .get('/*', function (_req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

const port = process.env.PORT || 3000
console.info(`Listening at port ${port}`)
app.listen(port)
