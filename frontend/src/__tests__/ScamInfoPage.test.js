import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { ScamInfoPage } from '../ScamInfoPage'
import theme from '../theme'

describe('<OtherFlowPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <ScamInfoPage />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
