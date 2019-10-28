import React from 'react'
import { i18n } from '@lingui/core'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { LandingPage } from '../LandingPage'
import theme from '../../theme'
import en from '../../locales/en.js'

i18n.load('en', { en })
i18n.activate('en')

const client = {
  readQuery: () => ({
    scamInfo: JSON.stringify({}),
    lostMoney: JSON.stringify({}),
    suspectInfo: JSON.stringify({}),
    files: [],
    contactInfo: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

describe('<LandingPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <I18nProvider i18n={i18n}>
              <LandingPage location={{ search: undefined }} />
            </I18nProvider>
          </ApolloProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
  })
})
