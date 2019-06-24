import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { ContactInfoPage } from '../ContactInfoPage'
import theme from '../theme'

describe('<ContactInfoPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <ContactInfoPage />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
