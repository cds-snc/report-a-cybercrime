import React from 'react'
import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import { Thanks } from '../thanks'
import { testClient } from '../utils/createTestClient'

describe('Thanks', () => {
  it('renders', () => {
    mount(
      <ApolloProvider client={testClient({ language: 'en' })}>
        <Thanks />
      </ApolloProvider>,
    )
  })
})
