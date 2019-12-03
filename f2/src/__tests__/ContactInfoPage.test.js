import React from 'react'
import { i18n } from '@lingui/core'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ContactInfoPage } from '../ContactInfoPage'
import canada from '../theme/canada'
import en from '../locales/en.json'

i18n.load('en', { en })
i18n.activate('en')

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
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <ApolloProvider client={client}>
            <I18nProvider i18n={i18n}>
              <ContactInfoPage />
            </I18nProvider>
          </ApolloProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
  })
})
