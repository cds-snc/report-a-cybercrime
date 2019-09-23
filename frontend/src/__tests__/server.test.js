/**
 * @jest-environment node
 */
import server from '../server'
const request = require('supertest')

let oldError

describe('Server Side Rendering', () => {
  // Data fetching during SSR fails.
  // This surpresses the log output,
  // until we can rip out the SSR code entirely.
  beforeAll(() => {
    oldError = console.error
    console.error = jest.fn()
  })
  afterAll(() => {
    console.error = oldError
  })

  describe('with Accept-Language: fr-CA', () => {
    it('returns a page in French', async () => {
      let response = await request(server)
        .get('/')
        .set('Accept-Language', 'fr-CA')

      let { headers } = response
      expect(headers['content-language']).toEqual('fr')
    })
  })

  describe('with Accept-Language: en-US', () => {
    it('returns a page in English', async () => {
      let response = await request(server)
        .get('/')
        .set('Accept-Language', 'en-US')

      let { headers } = response
      expect(headers['content-language']).toEqual('en')
    })
  })
})
