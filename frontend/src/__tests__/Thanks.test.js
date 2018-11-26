import React from 'react'
import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import { Thanks } from '../thanks'

describe('Screen3', () => {
  it('renders', () => {
    mount(
      <ApolloProvider client={{}}>
        <Thanks />
      </ApolloProvider>,
    )
  })
})
