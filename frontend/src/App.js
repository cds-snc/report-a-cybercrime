import React from 'react'
import { ApolloProvider, Query } from 'react-apollo'
import Home from './Home'
import { I18nProvider } from '@lingui/react'
import { LanguageSwitcher } from './LanguageSwitcher'
import createApolloClient from './utils/createApolloClient'
import gql from 'graphql-tag'
import catalogFr from '../locale/fr/messages.js'
import catalogEn from '../locale/en/messages.js'

const client = createApolloClient({ ssrMode: false })
const catalogs = { fr: catalogFr, en: catalogEn }

const App = () => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          language @client
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>loading... </p>
        if (error) return <p>Error</p>

        return (
          <I18nProvider language={data.language} catalogs={catalogs}>
            <LanguageSwitcher />
            <Home />
          </I18nProvider>
        )
      }}
    </Query>
  </ApolloProvider>
)

export default App
