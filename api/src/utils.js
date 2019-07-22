const { Database } = require('arangojs')
const { parse } = require('path')
const Moment = require('moment')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(Moment)

const getFilenameFromPath = path => parse(path).base

module.exports.getFilenameFromPath = getFilenameFromPath

const generateDateObjects = (startDate, endDate, props = {}) => {
  const start = moment(startDate)
  const end = moment(endDate)
  const range = moment.range(start, end)
  const dates = Array.from(range.by('days'))
  return dates.map(d =>
    Object.assign({}, props, { date: d.format('YYYY-MM-DD') }),
  )
}

module.exports.generateDateObjects = generateDateObjects

const uniqueArray = a =>
  [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))
module.exports.uniqueArray = uniqueArray

const sortByDateAttribute = a => a.sort((a, b) => a.date.localeCompare(b.date))
module.exports.sortByDateAttribute = sortByDateAttribute

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
  const testdb = new Database({ url, databaseName: dbname })
  // Switch to it
  testdb.useDatabase(dbname)
  testdb.useBasicAuth(user, password)

  // Create the collections we were asked for
  const cols = await Promise.all(
    collections.map(async c => {
      // Make a collection instance to put stuff in.
      const col = testdb.collection(c)
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

/**
 * RegExps.
 * A URL must match #1 and then at least one of #2/#3.
 * Use two levels of REs to avoid REDOS.
 *
 * Taken and edited from https://www.npmjs.com/package/is-url
 */

const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/

const localhostDomainRE = /^localhost[:?\d]*(?:[^:?\d]\S*)?$/

const nonLocalhostDomainRE = /^[^\\.]+\.\S{2,}$/

/**
 * Loosely validate a URL `string`.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isUrl(string) {
  var match = string.match(protocolAndDomainRE)
  if (!match) {
    return false
  }

  var everythingAfterProtocol = match[1]
  if (!everythingAfterProtocol) {
    return false
  }

  if (
    localhostDomainRE.test(everythingAfterProtocol) ||
    nonLocalhostDomainRE.test(everythingAfterProtocol)
  ) {
    return true
  }

  return false
}

module.exports.isUrl = isUrl
