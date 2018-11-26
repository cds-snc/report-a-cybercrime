import React from 'react'
import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import { Screen2 } from '../Screen2'

describe('Screen2', () => {
  it('renders', () => {
    mount(
      <ApolloProvider client={{}}>
        <Screen2 />
      </ApolloProvider>,
    )
  })
})
