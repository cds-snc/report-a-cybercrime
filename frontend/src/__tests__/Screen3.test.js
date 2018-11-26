import React from 'react'
import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import { Screen3 } from '../Screen3'

describe('Screen3', () => {
  it('renders', () => {
    mount(
      <ApolloProvider client={{}}>
        <Screen3 />
      </ApolloProvider>,
    )
  })
})
