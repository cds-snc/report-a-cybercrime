import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ScamInfoPage } from '../ScamInfoPage'
import theme from '../theme'
import en from '../../locale/en/messages.js'

const catalogs = { en }

const client = {
  readQuery: () => ({
    scamInfo: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

describe('<ScamInfoPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <ScamInfoPage />
          </I18nProvider>
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
