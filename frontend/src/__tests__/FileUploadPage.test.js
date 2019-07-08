import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { I18nProvider } from '@lingui/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { FileUploadPage } from '../FileUploadPage'
import theme from '../theme'
import en from '../../locale/en/messages.js'

describe('<FileUploadPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <I18nProvider language={'en'} catalogs={{ en }}>
            <FileUploadPage />
          </I18nProvider>
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
