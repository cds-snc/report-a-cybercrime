const { graphql } = require('graphql')
const { dbinit } = require('../dbinit')
const { schema } = require('../schema')
const { makeTestDatabase, dbNameFromFile } = require('../utils')

const { DB_USER: user, TEST_DB_URL: url, DB_PASSWORD: password } = process.env

// eslint-disable-next-line
let db, drop, truncate, reports, dbfunctions

describe('Query Type', () => {
  describe('Query.stats', () => {
    it('exists', () => {
      let Query = schema.getType('Query')
      expect(Query.getFields()).toHaveProperty('stats')
    })
  })

  describe('Query.stats.flaggingsWithin', () => {
    beforeAll(async () => {
      ;({ db, drop, truncate } = await makeTestDatabase({
        dbname: dbNameFromFile(__filename),
        user,
        password,
        url,
        collections: ['reports'],
      }))
      reports = db.collection('reports')
    })

    it('returns a count per day of the flaggings for an identifier', async () => {
      let variables = {
        phone: '555-555-5555',
        startDate: '2019-04-01',
        endDate: '2019-04-02',
      }
      let query = `
        query($phone: String!, $startDate: DateTime!, $endDate: DateTime!) {
          stats {
            flaggingsWithin(
              identifier: $phone
              startDate: $startDate
              endDate: $endDate
            ) {
              identifier
              summary {
                date
                total
              }
            }
          }
        }
      `
      let context = {
        db: await dbinit(db),
      }
      let response = await graphql(schema, query, {}, context, variables)
      expect(response).toEqual({
        data: {
          stats: {
            flaggingsWithin: {
              identifier: '555-555-5555',
              summary: [
                { date: '2019-04-01', total: 0 },
                { date: '2019-04-02', total: 0 },
              ],
            },
          },
        },
      })
    })
  })
})
