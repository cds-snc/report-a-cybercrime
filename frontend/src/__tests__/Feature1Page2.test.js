import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Feature1Page2 } from '../Feature1Page2'
import theme from '../theme'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'

describe('<Feature1Page2/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <Feature1Page2 />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
