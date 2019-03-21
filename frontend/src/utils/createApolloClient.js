import { language } from '../ClientResolvers'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'unfetch'
import gql from 'graphql-tag'

const createApolloClient = ({
  initialState = { language: 'en' },
  ssrMode = true,
  uri = '/graphql',
}) => {
  const typeDefs = gql`
    extend type Query {
      language: String
    }
  `

  const cache = new InMemoryCache()

  // Add defaults for form fields
  cache.writeData({
    data: {
      language: initialState.language,
      whatHappened: '',
      whatWasInvolved: [],
      whatWasInvolvedOther: '',
      howWereYouAffected: '',
    },
  })

  const client = new ApolloClient({
    ssrMode,
    link: new HttpLink({
      uri,
      credentials: 'same-origin',
      fetch,
    }),
    cache,
    typeDefs,
    resolvers: {
      Query: { language },
    },
  })

  return client
}

export default createApolloClient
