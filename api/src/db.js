require('dotenv-safe').config()

const { Database } = require('arangojs')

const {
  DB_USER: user,
  DB_URL: url,
  DB_NAME: databaseName,
  DB_PASSWORD: password,
} = process.env

const db = new Database({
  url,
})
db.useDatabase(databaseName)
db.useBasicAuth(user, password)

module.exports.db = db
