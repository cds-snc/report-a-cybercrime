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
      howWereYouContacted: [],
      lostMethodsOfPayment: [],
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
