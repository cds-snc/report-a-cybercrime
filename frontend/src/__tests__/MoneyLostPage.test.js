import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { MoneyLostPage } from '../MoneyLostPage'
import theme from '../theme'
import en from '../../locale/en/messages.js'

const catalogs = { en }

const client = {
  readQuery: () => ({
    lostMoney: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

describe('<MoneyLostPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <MoneyLostPage />
          </I18nProvider>
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
