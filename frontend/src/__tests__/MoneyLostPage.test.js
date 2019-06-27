import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { MoneyLostPage } from '../MoneyLostPage'
import theme from '../theme'
import en from '../../locale/en/messages.js'

const catalogs = { en }

describe('<MoneyLostPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <MoneyLostPage />
          </I18nProvider>
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
