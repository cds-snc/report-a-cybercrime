const request = require('supertest')
const { Server } = require('../server')
const { makeTestDatabase, dbNameFromFile } = require('../utils')

const { DB_USER: user, DB_URL: url, DB_PASSWORD: password } = process.env

let db, drop, truncate

describe('Queries', () => {
  describe('stats', () => {
    beforeAll(async () => {
      ;({ db, drop, truncate } = await makeTestDatabase({
        dbname: dbNameFromFile(__filename),
        user,
        password,
        url,
        collections: ['reports'],
      }))
    })

    afterAll(async () => {
      await drop()
    })

    afterEach(async () => {
      await truncate()
    })

    it('lets you query the number of reports via a stats type', async () => {
      let reports = await db.collection('reports')
      reports.save({ foo: 'I am a fake report' })
      let app = await Server(db)

      let response = await request(app)
        .post('/graphql')
        .set('Content-Type', 'application/json; charset=utf-8')
        .send({
          query: `{
          stats {
            reportCount
          }
        }`,
        })

      let {
        data: {
          stats: { reportCount },
        },
      } = response.body
      expect(reportCount).toEqual(1)
    })
  })
})
