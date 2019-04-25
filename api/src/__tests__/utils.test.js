require('dotenv-safe').config()
const {
  makeTestDatabase,
  dbNameFromFile,
  generateDateObjects,
  getFilenameFromPath,
} = require('../utils')

const { DB_USER: user, DB_URL: url, DB_PASSWORD: password } = process.env

describe('Utils', () => {
  describe('getFilenameFromPath', () => {
    it('returns the filename given an absolute path', async () => {
      expect(getFilenameFromPath(__filename)).toEqual('utils.test.js')
    })
  })

  describe('generateDateObjects', () => {
    it('generates on object per day within a range', async () => {
      let startDate = '2019-04-01'
      let endDate = '2019-04-03'

      let dates = generateDateObjects(startDate, endDate)
      expect(dates).toEqual([
        { date: '2019-04-01' },
        { date: '2019-04-02' },
        { date: '2019-04-03' },
      ])
    })

    it('adds additional props if passed', async () => {
      let startDate = '2019-04-01'
      let endDate = '2019-04-03'

      let dates = generateDateObjects(startDate, endDate, { foo: 'bar' })
      expect(dates).toEqual([
        { date: '2019-04-01', foo: 'bar' },
        { date: '2019-04-02', foo: 'bar' },
        { date: '2019-04-03', foo: 'bar' },
      ])
    })
  })

  describe('dbNameFromFile', () => {
    it('generates a collision resistant database name given a filename', async () => {
      expect(dbNameFromFile(__filename)).toMatch(/utils_test_js_\d{13}/)
    })
  })

  describe('makeTestDatabase', () => {
    it('creates a test database and returns useful functions', async () => {
      let response = await makeTestDatabase({
        dbname: dbNameFromFile(__filename),
        user,
        password,
        url,
        collections: ['data'],
      })

      await response.drop()

      expect(response).toEqual(
        expect.objectContaining({
          db: expect.any(Object),
          drop: expect.any(Function),
          truncate: expect.any(Function),
          collections: expect.arrayContaining([expect.any(Object)]),
        }),
      )
    })
  })
})
