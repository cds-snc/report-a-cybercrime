import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { MoneyLostPage } from '../MoneyLostPage'
import theme from '../theme'

describe('<MoneyLostPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <MoneyLostPage />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
