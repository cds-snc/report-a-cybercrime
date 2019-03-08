import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'emotion-theming'
import { ApolloProvider } from 'react-apollo'
import { Screen2 } from '../Screen2'
import theme from '../theme'

describe('Screen2', () => {
  it('renders', () => {
    mount(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={{}}>
          <Screen2 />
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
