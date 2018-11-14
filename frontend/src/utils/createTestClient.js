import { ApolloLink } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import fetch from 'unfetch'

export const testClient = data => {
  const cache = new InMemoryCache()
  const linkState = withClientState({
    cache,
    defaults: data,
    typeDefs: `
    type Query {
      language: String
    }
`,
  })

  const client = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([linkState, new HttpLink({ fetch })]),
    cache,
  })

  return client
}
