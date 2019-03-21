import { hydrate } from 'react-dom'
import { withLanguageSwitching } from './withLanguageSwitching'
import { language } from './ClientResolvers'
import { HttpLink } from 'apollo-link-http'
import App from './App'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Query {
    language: String
  }
`

const cache = new InMemoryCache()

// Add defaults for form fields
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
  }),
  cache,
  typeDefs,
  resolvers: {
    Query: { language },
    Mutation: {},
  },
})

hydrate(withLanguageSwitching(App, client), document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
