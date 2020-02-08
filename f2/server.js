const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const formidable = require('formidable')
const MongoClient = require('mongodb').MongoClient
const { DefaultAzureCredential } = require('@azure/identity')
const { SecretClient } = require('@azure/keyvault-secrets')
const { getAllCerts, encryptAndSend } = require('./src/utils/encryptedEmail')

require('dotenv').config()

// keyvault

let cosmosDbConfigured = false
let cosmosdbUrl

async function readKeyVault() {
  const keyVaultName = process.env.KEY_VAULT_NAME

  console.log(keyVaultName)

  const KVUri = 'https://' + keyVaultName + '.vault.azure.net'
  const credential = new DefaultAzureCredential()
  const client = new SecretClient(KVUri, credential)
  const cosmosdbName = (await client.getSecret('cosmosdbName')).value
  const cosmosdbKey = (await client.getSecret('cosmosdbKey')).value

  cosmosDbConfigured = cosmosdbName && cosmosdbKey
  if (!cosmosDbConfigured)
    console.warn(
      'Warning: CosmosDB not configured. Data will not be saved to CosmosDB database. Please check your Keyvault configuration and/or contents',
    )
  else {
    cosmosdbUrl = `mongodb://${cosmosdbName}:${cosmosdbKey}@${cosmosdbName}.documents.azure.com:10255/mean-dev?ssl=true&sslverifycertificate=false`
    MongoClient.connect(cosmosdbUrl, function(err, db) {
      if (err) {
        console.error(`MongoClient: ERROR: ${err}`)
        cosmosDbConfigured = false
      } else {
        console.log('MongoClient: connection succeeded')
        db.close()
      }
    })
  }
}

readKeyVault()

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

const randLetter = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return letters[Math.floor(Math.random() * letters.length)]
}
const randDigit = () => Math.floor(Math.random() * 10)

const randomizeString = s =>
  s
    ? s
        .replace(/[a-z]/g, () => randLetter())
        .replace(/[A-Z]/g, () => randLetter().toUpperCase())
        .replace(/[0-9]/g, () => randDigit())
    : s

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
    }

    // Extract the JSON from the "JSON" form element
    const data = JSON.parse(fields['json'])
    console.log('Parsed JSON:', data)
    data.submissionTime = new Date().toISOString()
    data.contactInfo.email = randomizeString(data.contactInfo.email)

    encryptAndSend(process.env.LDAP_UID, JSON.stringify(data))

    if (cosmosDbConfigured) {
      MongoClient.connect(cosmosdbUrl, function(err, db) {
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
