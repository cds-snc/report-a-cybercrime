import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ImpactStatementPage } from '../ImpactStatementPage'
import theme from '../../theme'
import en from '../../../locale/en/messages.js'

const client = {
  readQuery: () => ({
    impact: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

describe('<ImpactStatementPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <I18nProvider language={'en'} catalogs={{ en }}>
            <ImpactStatementPage />
          </I18nProvider>
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
