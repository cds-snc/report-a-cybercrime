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
      const Query = schema.getType('Query')
      expect(Query.getFields()).toHaveProperty('stats')
    })
  })

  describe('Query.stats.reportCount', () => {
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

    it('returns the total number of reports', async () => {
      const query = `
        query {
          stats {
            reportCount
          }
        }
      `
      const context = {
        db: await dbinit(db),
      }
      const response = await graphql(schema, query, {}, context)
      expect(response).toEqual({
        data: {
          stats: {
            reportCount: 0,
          },
        },
      })
    })
  })
})
