import React from 'react'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider } from 'react-apollo'
import { language } from './ClientResolvers'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import gql from 'graphql-tag'
import { BrowserRouter as Router } from 'react-router-dom'

const typeDefs = gql`
  extend type Query {
    language: String
  }
`

const getLanguage = () => {
  if (navigator.language.match(/^en/)) return 'en'
  if (navigator.language.match(/^fr/)) return 'fr'
  if (navigator.languages.filter(l => l.match(/^en/)).length > 0) return 'en'
  if (navigator.languages.filter(l => l.match(/^fr/)).length > 0) return 'fr'
}

const cache = new InMemoryCache()
// Add defaults for form fields
cache.writeData({
  data: {
    language: getLanguage(),
    doneForms: false,
    scamInfo: JSON.stringify({}),
    lostMoney: JSON.stringify({}),
    suspectInfo: JSON.stringify({}),
    files: [],
    contactInfo: JSON.stringify({}),
    timeFrame: JSON.stringify({}),
    whatHappened: JSON.stringify({}),
    scammerDetails: JSON.stringify({}),
    impact: JSON.stringify({}),
    tellUsMore: JSON.stringify({}),
    surveyInfo: JSON.stringify({}),
  },
})

const client = new ApolloClient({
  link: createUploadLink(),
  cache,
  typeDefs,
  resolvers: {
    Query: { language },
  },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <I18nProvider i18n={i18n}>
      <Router>
        <App />
      </Router>
    </I18nProvider>
  </ApolloProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
