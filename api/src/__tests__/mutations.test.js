const request = require('supertest')
const fs = require('fs')
const { Server } = require('../server')
const { dbinit } = require('../dbinit')
const { makeTestDatabase, dbNameFromFile } = require('../utils')

const { DB_USER: user, TEST_DB_URL: url, DB_PASSWORD: password } = process.env

let db, drop, truncate

describe('Mutations', () => {
  describe('flagIdentifier', () => {
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

    it('accepts an identifier and returns a summary', async () => {
      let app = await Server({
        db: await dbinit(db),
      })

      let response = await request(app)
        .post('/graphql')
        .set('Content-Type', 'application/json; charset=utf-8')
        .send({
          query: `
            mutation {
              flagIdentifier(identifier: "555-555-5555") {
                identifier
                summary {
                  total
                }
              }
            }
          `,
        })

      let { data } = response.body
      expect(data).toEqual({
        flagIdentifier: {
          identifier: '555-555-5555',
          summary: [
            {
              total: 1,
            },
          ],
        },
      })
    })

    describe('identifierFlaggingsWithin', () => {
      it('', async () => {
        let reports = await db.collection('reports')
        reports.save({ foo: 'I am a fake report' })
        let app = await Server({
          db: await dbinit(db),
        })

        let response = await request(app)
          .post('/graphql')
          .set('Content-Type', 'application/json; charset=utf-8')
          .send({
            query: `
            {
              stats {
                flags:identifierFlaggingsWithin(identifier: "555-555-5555") {
                  identifier
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
            identifier: '555-555-5555',
            summary: [],
          },
        })
      })
    })

    describe('file uploading', () => {
      it('accepts a file', async () => {
        const putMock = jest.fn()

        let app = await Server({
          db: await dbinit(db),
          minio: { client: { putObject: putMock }, bucket: 'kittens' },
        })

        // This is constructed according to the file uploading spec:
        // https://github.com/jaydenseric/graphql-multipart-request-spec
        let response = await request(app)
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
              success: false,
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
