import React from 'react'
import { i18n } from '@lingui/core'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { WhatHappenedPage } from '../WhatHappenedPage'
import theme from '../../theme'
import en from '../../locales/en.js'

i18n.load('en', { en })
i18n.activate('en')

const client = {
  readQuery: () => ({
    whatHappened: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

describe('<WhatHappenedPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <I18nProvider i18n={i18n}>
              <WhatHappenedPage />
            </I18nProvider>
          </ApolloProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
  })
})
