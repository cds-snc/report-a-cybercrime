const { dbinit } = require('../dbinit')
const { makeTestDatabase, dbNameFromFile } = require('../utils')

const { DB_USER: user, TEST_DB_URL: url, DB_PASSWORD: password } = process.env

let db, drop, reports
let dbfunctions

describe('dbinit', () => {
  describe('produces database functions given a database object', () => {
    beforeAll(async () => {
      ;({ db, drop } = await makeTestDatabase({
        dbname: dbNameFromFile(__filename),
        user,
        password,
        url,
        collections: ['reports'],
      }))

      dbfunctions = await dbinit(db)
      reports = db.collection('reports')
    })

    afterAll(async () => {
      await drop()
    })

    afterEach(async () => {
      await reports.truncate()
    })

    describe('countReports', () => {
      it('lets you query the number of reports via a stats type', async () => {
        await reports.save({ foo: 'I am a fake report' })

        const count = await dbfunctions.countReports()

        expect(count).toEqual(1)
      })
    })

    describe('saveReport', () => {
      it('saves a report to the reports collection', async () => {
        const _savedReport = await dbfunctions.saveReport({
          foo: 'I am a fake report',
        })

        const { count } = await reports.count()
        expect(count).toEqual(1)
      })
    })

    describe('summariseByDay', () => {
      it('returns reports grouped by date', async () => {
        const phone = '613-986-5383'

        await dbfunctions.saveReport({
          identifier: phone,
          createdAt: '2019-04-03T18:42:32.381Z',
        })

        await dbfunctions.saveReport({
          identifier: phone,
          createdAt: '2019-04-02T18:42:32.384Z',
        })

        await dbfunctions.saveReport({
          identifier: phone,
          createdAt: '2019-04-02T18:47:32.384Z',
        })

        const count = await dbfunctions.summariseByDay(phone)

        expect(count).toEqual([
          { date: '2019-04-02', total: 2 },
          { date: '2019-04-03', total: 1 },
        ])
      })
    })

    describe('summariseReportsWithin', () => {
      it('returns report counts within a date range', async () => {
        const identifier = '555-555-5555'
        const startDate = '2019-04-01'
        const endDate = '2019-04-03'

        await dbfunctions.saveReport({
          identifier,
          createdAt: '2019-04-01T18:42:32.381Z',
        })

        await dbfunctions.saveReport({
          identifier,
          createdAt: '2019-04-03T18:42:32.384Z',
        })

        await dbfunctions.saveReport({
          identifier,
          createdAt: '2019-04-03T19:47:32.384Z',
        })

        const summary = await dbfunctions.summariseReportsBetween({
          identifier,
          startDate,
          endDate,
        })

        expect(summary).toEqual([
          { date: '2019-04-01', total: 1 },
          { date: '2019-04-02', total: 0 },
          { date: '2019-04-03', total: 2 },
        ])
      })
    })
  })
})
