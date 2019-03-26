import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { Trans, I18nProvider } from '@lingui/react'
import gql from 'graphql-tag'
import { P } from './components/paragraph'
import catalogFr from '../locale/fr/messages.js'
import catalogEn from '../locale/en/messages.js'
import catalogDe from '../locale/de/messages.js'
const catalogs = { fr: catalogFr, en: catalogEn, de: catalogDe }

export const LanguageSwitching = ({ children }) => (
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
            <P>
              <Trans>loading...</Trans>
            </P>
          ) : null}
          {error ? (
            <P color="crimson" fontWeight="bolder">
              Error
            </P>
          ) : null}
          {children}
        </I18nProvider>
      )
    }}
  </Query>
)

LanguageSwitching.propTypes = { children: PropTypes.node.isRequired }
