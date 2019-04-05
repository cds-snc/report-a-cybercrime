const { dbinit } = require('../dbinit')
const { makeTestDatabase, dbNameFromFile } = require('../utils')

const { DB_USER: user, DB_URL: url, DB_PASSWORD: password } = process.env

let db, drop, reports

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
        let dbfunctions = await dbinit(db)

        let count = await dbfunctions.countReports()

        expect(count).toEqual(1)
      })
    })

    describe('saveReport', () => {
      it('saves a report to the reports collection', async () => {
        let dbfunctions = await dbinit(db)

        let _savedReport = await dbfunctions.saveReport({
          foo: 'I am a fake report',
        })

        let { count } = await reports.count()
        expect(count).toEqual(1)
      })
    })

    describe('summariseByDay', () => {
      it('returns reports grouped by date', async () => {
        let phone = '613-986-5383'
        let dbfunctions = await dbinit(db)

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

        let count = await dbfunctions.summariseByDay(phone)

        expect(count).toEqual([
          { date: '2019-04-02', total: 2 },
          { date: '2019-04-03', total: 1 },
        ])
      })
    })
  })
})
