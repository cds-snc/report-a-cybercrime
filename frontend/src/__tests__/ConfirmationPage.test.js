import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { ConfirmationPage } from '../ConfirmationPage'
import theme from '../theme'

describe('<ConfirmationPage />', () => {
  afterEach(cleanup)
  const client = {
    readQuery: () => ({
      scamInfo: JSON.stringify({}),
      lostMoney: JSON.stringify({}),
      suspectInfo: JSON.stringify({}),
      files: [],
      contactInfo: JSON.stringify({}),
    }),
  }

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <ConfirmationPage />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
