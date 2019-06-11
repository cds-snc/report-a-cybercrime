import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'

export const testClient = data => {
  const cache = new InMemoryCache()
  cache.writeData({ data })

  const client = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({ fetch }),
    cache,
    resolvers: {},
    typeDefs: `
    type Query {
      language: String
    }
`,
  })

  return client
}
