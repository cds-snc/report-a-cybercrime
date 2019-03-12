import { InMemoryCache } from 'apollo-cache-inmemory'
import { language, switchLanguage } from '../ClientResolvers'

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

  describe('switchLanguage', () => {
    it('changes the language in the cache', async () => {
      const cache = new InMemoryCache()

      cache.writeData({
        data: {
          language: 'en',
        },
      })

      switchLanguage({}, {}, { cache })

      const { data } = cache.data
      expect(data).toEqual({ ROOT_QUERY: { language: 'fr' } })
    })
  })
})
