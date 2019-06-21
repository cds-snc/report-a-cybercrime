import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { OtherFlowPage } from '../OtherFlowPage'
import theme from '../theme'

describe('<OtherFlowPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <OtherFlowPage />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
