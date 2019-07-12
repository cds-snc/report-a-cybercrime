import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ContactInfoPage } from '../ContactInfoPage'
import theme from '../theme'
import en from '../../locale/en/messages.js'

const catalogs = { en }

const client = {
  readQuery: () => ({
    contactInfo: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

describe('<ContactInfoPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <ContactInfoPage />
          </I18nProvider>
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
