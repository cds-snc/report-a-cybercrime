import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Page2 } from '../Page2'
import theme from '../theme'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'

describe('<Page2/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <Page2 />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
