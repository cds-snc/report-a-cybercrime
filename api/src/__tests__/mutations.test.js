const request = require('supertest')
const { Server } = require('../server')
const { makeTestDatabase, dbNameFromFile } = require('../utils')

const { DB_USER: user, DB_URL: url, DB_PASSWORD: password } = process.env

let db, drop, truncate

describe('Mutations', () => {
  describe('flagPhoneNumber', () => {
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

    it('accepts a phone number and returns a summary', async () => {
      let app = await Server(db)

      let response = await request(app)
        .post('/graphql')
        .set('Content-Type', 'application/json; charset=utf-8')
        .send({
          query: `
            mutation {
              flagPhoneNumber(phoneNumber: "555-555-5555") {
                phoneNumber
                summary {
                  date
                  total
                }
              }
            }
          `,
        })

      let { data } = response.body
      expect(data).toEqual({
        flagPhoneNumber: {
          phoneNumber: '555-555-5555',
          summary: [
            {
              date: '2019-04-03',
              total: 1,
            },
          ],
        },
      })
    })

    describe('phoneNumberFlaggingsWithin', () => {
      it('', async () => {
        let reports = await db.collection('reports')
        reports.save({ foo: 'I am a fake report' })
        let app = await Server(db)

        let response = await request(app)
          .post('/graphql')
          .set('Content-Type', 'application/json; charset=utf-8')
          .send({
            query: `
            {
              stats {
                flags:phoneNumberFlaggingsWithin(phoneNumber: "555-555-5555") {
                  phoneNumber
                  summary {
                    date
                    total
                  }
                }
              }
            }
          `,
          })

        let {
          data: { stats },
        } = response.body
        expect(stats).toEqual({
          flags: {
            phoneNumber: '555-555-5555',
            summary: [],
          },
        })
      })
    })
  })
})
