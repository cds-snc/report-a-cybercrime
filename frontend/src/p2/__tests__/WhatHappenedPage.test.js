import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { WhatHappenedPage } from '../WhatHappenedPage'
import theme from '../../theme'
import en from '../../../locale/en/messages.js'

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
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <I18nProvider language={'en'} catalogs={{ en }}>
            <WhatHappenedPage />
          </I18nProvider>
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
