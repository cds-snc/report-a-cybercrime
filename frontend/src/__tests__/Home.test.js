import React from 'react'
import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import Home from '../Home'
import { testClient } from '../utils/createTestClient'

describe('Home', () => {
  let client

  beforeEach(() => {
    client = testClient({ language: 'en' })
  })

  it('renders', () => {
    mount(
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>,
    )
  })
})
