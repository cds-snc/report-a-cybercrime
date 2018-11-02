require('dotenv-safe').config()
const request = require('supertest')
const { Server } = require('../server')
const { makeTestDatabase, dbNameFromFile } = require('../utils')

const { DB_USER: user, DB_URL: url, DB_PASSWORD: password } = process.env

let db, drop, truncate

describe('Queries', () => {
  describe('hello', () => {
    beforeAll(async () => {
      ;({ db, drop, truncate } = await makeTestDatabase({
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
