const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const formidable = require('formidable')
const fs = require('fs')
const crypto = require('crypto')
const { getAllCerts, encryptAndSend } = require('./src/utils/encryptedEmail')
const { saveBlob } = require('./src/utils/saveBlob')
const { selfHarmWordsScan } = require('./utils/selfHarmWordsScan')
var clamd = require('clamdjs')
var fs = require('fs')

require('dotenv').config()
var scanner = clamd.createScanner(process.env.CLAM_URL, 3310)

// fetch and store certs for intake analysts
getAllCerts(process.env.LDAP_UID)

const app = express()

const MongoClient = require('mongodb').MongoClient

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

    for (const file of Object.entries(files)) {

      
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

    saveBlob(data.reportId, filesToJson)

    const selfHarmWords = selfHarmWordsScan(data)
    if (selfHarmWords) {
      console.warn(`Self harm words detected: ${selfHarmWords}`)
    }
    data.selfHarmWords = selfHarmWords
    data.submissionTime = new Date().toISOString()

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
