import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { language } from '../ClientResolvers'
import fetch from 'isomorphic-unfetch'
import gql from 'graphql-tag'

describe('ApolloClient', () => {
  it('can be created with proper defaults', async () => {
    const typeDefs = gql`
      extend type Query {
        language: String
      }
    `

    const cache = new InMemoryCache()

    cache.writeData({
      data: {
        language: 'en',
        whatHappened: '',
        whatWasInvolved: [],
        whatWasInvolvedOther: '',
        howWereYouAffected: '',
      },
    })

    const client = new ApolloClient({
      link: new HttpLink({
        uri: '/graphql',
        credentials: 'same-origin',
        fetch,
      }),
      cache,
      typeDefs,
      resolvers: {
        Query: { language },
      },
    })

    let response = await client.query({
      query: gql`
        {
          language @client
        }
      `,
    })
    expect(response.data).toEqual({ language: 'en' })
  })
})
