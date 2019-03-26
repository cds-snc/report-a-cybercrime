import { InMemoryCache } from 'apollo-cache-inmemory'
import { language } from '../ClientResolvers'

describe('ClientResolvers', () => {
  describe('language', () => {
    it('returns the current language from the cache', async () => {
      const cache = new InMemoryCache()

      cache.writeData({
        data: {
          language: 'en',
        },
      })

      let response = language({}, {}, { cache })
      expect(response).toEqual({ language: 'en' })
    })
  })
})
