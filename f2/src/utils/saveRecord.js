const MongoClient = require('mongodb').MongoClient
const date = new Date()
const currentDate =
  (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
  '/' +
  (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
  '/' +
  date.getFullYear()

let numberofReports = 0
const dbName = process.env.COSMOSDB_NAME
const dbKey = process.env.COSMOSDB_KEY

let cosmosDbConfigured = dbName && dbKey
if (!cosmosDbConfigured) {
  console.warn(
    'Warning: CosmosDB not configured. Data will not be saved to CosmosDB database. Please set the environment variables COSMOSDB_NAME and COSMOSDB_KEY',
  )
}

const url = `mongodb://${dbName}:${dbKey}@${dbName}.documents.azure.com:10255/mean-dev?ssl=true&sslverifycertificate=false`

async function saveRecord(data, res) {
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
            console.log(`Report ${data.reportId} saved to CosmosDB`)
            res.statusMessage = data.reportId
            res.send(res.statusMessage)
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
async function getReportCount() {
  if (cosmosDbConfigured) {
    MongoClient.connect(url, function(err, db) {
      if (err) {
        console.warn(`ERROR in MongoClient.connect: ${err}`)
      } else {
        var dbo = db.db('cybercrime')
        dbo
          .collection('reports')
          .find({
            submissionDate: {
              $eq: currentDate,
            },
          })
          .toArray(function(err, result) {
            if (err) {
              console.warn(`ERROR in find: ${err}`)
            } else {
              db.close()
              numberofReports = result.length
            }
          })
      }
    })
  }
  return numberofReports
}

module.exports = { saveRecord, getReportCount }
