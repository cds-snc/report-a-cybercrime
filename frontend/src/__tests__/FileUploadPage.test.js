import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { FileUploadPage } from '../FileUploadPage'
import theme from '../theme'

describe('<FileUploadPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <FileUploadPage />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
