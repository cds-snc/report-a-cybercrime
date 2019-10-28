const request = require('supertest')
const { Server } = require('../server')

describe('Server', () => {
  describe('/alive', () => {
    it('returns 200 indicating the process is alive', async () => {
      const app = await Server({
        db: jest.fn(),
      })
      const response = await request(app).get('/alive')

      expect(response.status).toEqual(200)
    })
  })

  describe('/ready', () => {
    it('returns 200 after verifying it can connect to ArangoDB', async () => {
      // Simulate Arangojs database.version()
      // https://bit.ly/2kqEhpc
      const context = {
        db: {
          version: () =>
            Promise.resolve({
              server: 'arango',
              license: 'community',
              version: '3.5.0',
            }),
        },
      }
      const app = await Server(context)
      const response = await request(app).get('/ready')

      expect(response.status).toEqual(200)
    })

    it('returns 500 if it cannot connect to ArangoDB', async () => {
      // Simulate Arangojs database.version()
      // https://bit.ly/2kqEhpc
      const context = {
        db: {
          version: () => Promise.reject({}), // eslint-disable-line
        },
      }
      const app = await Server(context)
      const response = await request(app).get('/ready')

      expect(response.status).toEqual(500)
    })
  })
})
