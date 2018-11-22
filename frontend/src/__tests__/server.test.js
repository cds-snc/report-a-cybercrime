import server from '../server'
const request = require('supertest')

describe('Server Side Rendering', () => {
  describe('with Accept-Language: fr-CA', () => {
    it('returns a page in French', async () => {
      let response = await request(server)
        .get('/')
        .set('Accept-Language', 'fr-CA')

      let { text } = response

      expect(text).toMatch(/Pour usage interne uniquement/)
    })
  })

  describe('with Accept-Language: en-US', () => {
    it('returns a page in English', async () => {
      let response = await request(server)
        .get('/')
        .set('Accept-Language', 'en-US')

      let { text } = response

      expect(text).toMatch(/For internal use only/)
    })
  })
})
