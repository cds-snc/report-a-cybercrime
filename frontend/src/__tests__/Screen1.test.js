import React from 'react'
import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import { Screen1 } from '../Screen1'

describe('Screen1', () => {
  it('renders', () => {
    mount(
      <ApolloProvider client={{}}>
        <Screen1 />
      </ApolloProvider>,
    )
  })
})
