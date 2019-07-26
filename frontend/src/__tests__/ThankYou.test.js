import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { ThankYou } from '../ThankYou'
import theme from '../theme'

const client = {
  writeData: jest.fn(),
}

describe('<ThankYou />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <ThankYou />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
