import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { setupI18n } from '@lingui/core'
import { MemoryRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ScammerDetailsPage } from '../ScammerDetailsPage'
import theme from '../../theme'
import en from '../../locales/en.js'

const i18n = setupI18n({ catalogs: { en } })

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
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <I18nProvider i18n={i18n}>
              <ScammerDetailsPage />
            </I18nProvider>
          </ApolloProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
  })
})
