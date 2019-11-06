const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()
const app = express()

const MongoClient = require('mongodb').MongoClient

const dbName = process.env.COSMOSDB_NAME
const dbKey = process.env.COSMOSDB_KEY

const url = `mongodb://${dbName}:${dbKey}@${dbName}.documents.azure.com:10255/mean-dev?ssl=true&sslverifycertificate=false`

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  console.log('Connected to db!')
  db.close()
})

app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err
    var dbo = db.db('mydb')
    var myobj = { got: 'ping', sent: 'pong' }
    dbo.collection('customers').insertOne(myobj, function(err, res) {
      if (err) throw err
      console.log('1 document inserted')
      db.close()
    })
  })
  return res.send('pong')
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3000
console.log(`Listening at port ${port}`)
app.listen(port)
