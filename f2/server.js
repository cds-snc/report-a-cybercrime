const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()
const app = express()

const MongoClient = require('mongodb').MongoClient

const dbName = process.env.COSMOSDB_NAME
const dbKey = process.env.COSMOSDB_KEY

let cosmosDbConfigured = dbName && dbKey
if (!cosmosDbConfigured) {
  console.warn(
    'Warning: CosmosDB not configured. Data will not be saved to CosmosDB database. Please set the environment variables COSMOSDB_NAME and COSMOSDB_KEY',
  )
}

const url = `mongodb://${dbName}:${dbKey}@${dbName}.documents.azure.com:10255/mean-dev?ssl=true&sslverifycertificate=false`

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
  const data = req.body
  data.submissionTime = new Date().toISOString()
  data.contactInfo.email = randomizeString(data.contactInfo.email)

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
}

let count = 0

app
  .use(express.static(path.join(__dirname, 'build')))
  .use(bodyParser.json())

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
