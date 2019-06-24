import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { SuspectInfoPage } from '../SuspectInfoPage'
import theme from '../theme'
import en from '../../locale/en/messages.js'

const catalogs = { en }

describe('<SuspectInfoPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <SuspectInfoPage />
          </I18nProvider>
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
