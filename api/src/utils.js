const { Database } = require('arangojs')
const { parse } = require('path')

const getFilenameFromPath = path => parse(path).base

module.exports.getFilenameFromPath = getFilenameFromPath

const dbNameFromFile = filename =>
  getFilenameFromPath(filename).replace(/\./g, '_') + '_' + Date.now()

module.exports.dbNameFromFile = dbNameFromFile

const makeTestDatabase = async ({
  dbname,
  url,
  user,
  password,
  collections,
}) => {
  // create a connection to Arango
  const conn = new Database({
    url,
  })
  // Use the _system db so we can create other databases
  conn.useDatabase('_system')
  conn.useBasicAuth(user, password)
  // create a second database
  const _info = await conn.createDatabase(dbname, [{ user }])

  // Create wrapper instance for our new database
  let testdb = new Database({ url, databaseName: dbname })
  // Switch to it
  testdb.useDatabase(dbname)
  testdb.useBasicAuth(user, password)

  // Create the collections we were asked for
  let cols = await Promise.all(
    collections.map(async c => {
      // Make a collection instance to put stuff in.
      let col = testdb.collection(c)
      // Make sure the instance has a real collection backing it.
      return col.create()
    }),
  )

  // Return the db, collections and functions to drop and truncate it.
  return {
    db: testdb,
    collections: cols,
    drop: () => conn.dropDatabase(dbname),
    truncate: () => testdb.truncate(),
  }
}

module.exports.makeTestDatabase = makeTestDatabase
