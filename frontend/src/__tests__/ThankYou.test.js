import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { ThankYou } from '../ThankYou'
import theme from '../theme'

describe('<LoseMoney />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <ThankYou />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
