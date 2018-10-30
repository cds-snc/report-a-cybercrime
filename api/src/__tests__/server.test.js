require('dotenv-safe').config()
const request = require('supertest')
const { Server } = require('../server')
const { dbinit } = require('../dbinit')
const {
  makeTestDatabase,
  getFilenameFromPath,
  dbNameFromFile,
} = require('../utils')
const { Database } = require('arangojs')

// About the ugliness:
// Since Jest runs tests in parallel, each file needs to create it's own db,
// otherwise test data from one test clobbers test data in another. The result
// nondeterministic tests and general unhappiness.
// TODO: This will need to be cleaned up and most likely shared across tests.

const { DB_USER: user, DB_URL: url, DB_PASSWORD: password } = process.env

let db, drop, truncate, collections

describe('Queries', () => {
  describe('hello', () => {
    beforeAll(async () => {
      ({ db, drop, truncate, collections } = await makeTestDatabase({
        dbname: dbNameFromFile(__filename),
        user,
        password,
        url,
        collections: ['data'],
      }))
    })

    afterAll(async () => {
      await drop()
    })

    afterEach(async () => {
      await truncate()
    })

    it('returns A "Hello world" message from the database', async () => {
      let app = await Server(db)

      let response = await request(app)
        .post('/graphql')
        .set('Content-Type', 'application/json; charset=utf-8')
        .send({
          query: `{hello}`,
        })

      let {
        data: { hello },
      } = response.body
      expect(hello).toEqual('Hello world')
    })
  })
})
