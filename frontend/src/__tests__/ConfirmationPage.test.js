import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { ConfirmationPage } from '../ConfirmationPage'
import theme from '../theme'

const client = {
  readQuery: () => ({
    scamInfo: JSON.stringify({}),
    lostMoney: JSON.stringify({}),
    suspectInfo: JSON.stringify({}),
    files: [],
    contactInfo: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

describe('<ConfirmationPage />', () => {
  afterEach(cleanup)

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
