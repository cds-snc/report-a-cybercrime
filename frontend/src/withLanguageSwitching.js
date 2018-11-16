import React from 'react'
import { ApolloProvider, Query } from 'react-apollo'
import { Trans, I18nProvider } from '@lingui/react'
import gql from 'graphql-tag'
import catalogFr from '../locale/fr/messages.js'
import catalogEn from '../locale/en/messages.js'
const catalogs = { fr: catalogFr, en: catalogEn }

export const withLanguageSwitching = (Component, client) => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          language @client
        }
      `}
    >
      {({ loading, error, data }) => {
        return (
          <I18nProvider language={data.language} catalogs={catalogs}>
            {loading ? (
              <p>
                <Trans>loading...</Trans>
              </p>
            ) : null}
            {error ? <p>Error</p> : null}
            <Component />
          </I18nProvider>
        )
      }}
    </Query>
  </ApolloProvider>
)
