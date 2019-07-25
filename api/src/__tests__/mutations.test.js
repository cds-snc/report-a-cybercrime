const request = require('supertest')
const fs = require('fs')
const { Server } = require('../server')
const { dbinit } = require('../dbinit')
const { makeTestDatabase, dbNameFromFile } = require('../utils')

const { DB_USER: user, TEST_DB_URL: url, DB_PASSWORD: password } = process.env

let db, drop, truncate

describe('Mutations', () => {
  beforeAll(async () => {
    ;({ db, drop, truncate } = await makeTestDatabase({
      dbname: dbNameFromFile(__filename),
      user,
      password,
      url,
      collections: ['reports', 'files'],
    }))
  })

  afterAll(async () => {
    await drop()
  })

  afterEach(async () => {
    await truncate()
  })

  describe('submitReport', () => {
    it('accepts report data and returns a report ID', async () => {
      const app = await Server({
        db: await dbinit(db),
      })

      const response = await request(app)
        .post('/graphql')
        .set('Content-Type', 'application/json; charset=utf-8')
        .send({
          query: `
            mutation {
              submitReport(scamInfo: {howWereYouContacted: "email"}) {
                reportID
              }
            }
          `,
        })
      const { data } = response.body
      expect(data).toEqual({
        submitReport: {
          reportID: 'mocked uuid',
        },
      })
    })

    describe('file uploading', () => {
      it('accepts a file', async () => {
        const putMock = jest.fn()

        const app = await Server({
          db: await dbinit(db),
          minio: { client: { putObject: putMock }, bucket: 'kittens' },
        })

        // This is constructed according to the file uploading spec:
        // https://github.com/jaydenseric/graphql-multipart-request-spec
        const response = await request(app)
          .post('/graphql')
          .field(
            'operations',
            JSON.stringify({
              query: `
            mutation ($file: Upload) {
              uploadFile(file: $file) { success }
            }
          `,
            }),
          )
          .field('map', '{ "0": ["variables.file"] }')
          .field('0', fs.createReadStream('./src/__tests__/kitten.jpg'))

        expect(response.body).toEqual({
          data: {
            uploadFile: {
              success: true,
            },
          },
        })
        expect(putMock).toHaveBeenCalledWith(
          'kittens',
          'kitten.jpg',
          expect.any(Object),
        )
      })
    })
  })
})
