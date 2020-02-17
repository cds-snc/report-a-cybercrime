const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const formidable = require('formidable')
const MongoClient = require('mongodb').MongoClient
const clamd = require('clamdjs')
const fs = require('fs')
const { getAllCerts, encryptAndSend } = require('./src/utils/encryptedEmail')
const { selfHarmWordsScan } = require('./utils/selfHarmWordsScan')
const { notifyIsSetup, sendConfirmation } = require('./utils/notify')

require('dotenv').config()
var scanner = clamd.createScanner(process.env.CLAM_URL, 3310)

// fetch and store certs for intake analysts
getAllCerts(process.env.LDAP_UID)

const app = express()

const dbName = process.env.COSMOSDB_NAME
const dbKey = process.env.COSMOSDB_KEY
const allowedOrigins = [
  'http://dev.antifraudcentre-centreantifraude.ca',
  'http://pre.antifraudcentre-centreantifraude.ca',
  'http://antifraudcentre-centreantifraude.ca',
  'http://centreantifraude-antifraudcentre.ca',
  'http://antifraudcentre.ca',
  'http://centreantifraude.ca',
]

let cosmosDbConfigured = dbName && dbKey
if (!cosmosDbConfigured) {
  console.warn(
    'Warning: CosmosDB not configured. Data will not be saved to CosmosDB database. Please set the environment variables COSMOSDB_NAME and COSMOSDB_KEY',
  )
}

const url = `mongodb://${dbName}:${dbKey}@${dbName}.documents.azure.com:10255/mean-dev?ssl=true&sslverifycertificate=false`

const uploadData = (req, res) => {
  new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err)
      throw err
    }
    /*
    Logging Form fields and files for demonstration purposes, remove later
    */
    console.log('Fields', fields)
    console.log('Files', files)
    for (const file of Object.entries(files)) {
      console.log(file)
      //scan file for virus
      var readStream = fs.createReadStream(file[1].path)
      //set timeout for 10000
      scanner
        .scanStream(readStream, 10000)
        .then(function(reply) {
          console.log(file[0] + ': ' + reply)
          // print some thing like
          // 'stream: OK', if not infected
          // `stream: ${virus} FOUND`, if infected
        })
        .catch(function() {})
    }

    // Extract the JSON from the "JSON" form element
    const data = JSON.parse(fields['json'])
    console.log('Parsed JSON:', data)

    const selfHarmWords = selfHarmWordsScan(data)
    if (selfHarmWords.length) {
      console.warn(`Self harm words detected: ${selfHarmWords}`)
    }
    data.selfHarmWords = selfHarmWords
    data.submissionTime = new Date().toISOString()

    if (notifyIsSetup && data.contactInfo.email) {
      sendConfirmation(data.contactInfo.email, data.reportId)
    }

    encryptAndSend(process.env.LDAP_UID, JSON.stringify(data))

    if (cosmosDbConfigured) {
      MongoClient.connect(url, function(err, db) {
        if (err) {
          console.warn(`ERROR in MongoClient.connect: ${err}`)
          res.statusCode = 502
          res.statusMessage = 'Error saving to CosmosDB'
          res.send(res.statusMessage)
        } else {
          var dbo = db.db('cybercrime')
          dbo.collection('reports').insertOne(data, function(err, result) {
            if (err) {
              console.log({ data })
              console.warn(`ERROR in insertOne: ${err}`)
              res.statusCode = 502
              res.statusMessage = 'Error saving to CosmosDB'
              res.send(res.statusMessage)
            } else {
              db.close()
              console.log('Report saved to CosmosDB')
              res.send('Report saved to CosmosDB')
            }
          })
        }
      })
    } else {
      res.statusCode = 500
      res.statusMessage = 'CosmosDB not configured'
      res.send('CosmosDB not configured')
    }
  })
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
    uploadData(req, res)
  })

  .get('/*', function(_req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

const port = process.env.PORT || 3000
console.log(`Listening at port ${port}`)
app.listen(port)
