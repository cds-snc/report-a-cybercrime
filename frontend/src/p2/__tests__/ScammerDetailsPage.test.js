import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ScammerDetailsPage } from '../ScammerDetailsPage'
import theme from '../../theme'
import en from '../../../locale/en/messages.js'

const client = {
  readQuery: () => ({
    scammerDetails: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

describe('<ScammerDetailsPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <I18nProvider language={'en'} catalogs={{ en }}>
            <ScammerDetailsPage />
          </I18nProvider>
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
