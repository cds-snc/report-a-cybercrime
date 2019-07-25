import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import { FilesToUpload } from '../FileUploadYesNoPage'

describe('<FilesToUpload />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <FilesToUpload />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
