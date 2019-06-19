import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { MoneyTakenPage } from '../MoneyTakenPage'
import theme from '../theme'

describe('<MoneyTakenPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <MoneyTakenPage />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
