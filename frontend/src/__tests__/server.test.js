import server from '../server'
const request = require('supertest')

describe('Server Side Rendering', () => {
  describe('with Accept-Language: fr-CA', () => {
    it('returns a page in French', async () => {
      let response = await request(server)
        .get('/')
        .set('Accept-Language', 'fr-CA')

      let { text } = response

      expect(text).toMatch(
        /Ce site évoluera au fur et à mesure que nous testons des idées et apprenons des gens comme vous./,
      )
    })
  })

  describe('with Accept-Language: en-US', () => {
    it('returns a page in English', async () => {
      let response = await request(server)
        .get('/')
        .set('Accept-Language', 'en-US')

      let { text } = response

      expect(text).toMatch(
        /This site will changing as we test ideas and learn from people like you./,
      )
    })
  })
})
