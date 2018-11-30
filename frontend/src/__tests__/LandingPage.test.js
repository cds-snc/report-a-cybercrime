import React from 'react'
import { mount } from 'enzyme'
import { LandingPage } from '../LandingPage'
import { testClient } from '../utils/createTestClient'
import { ApolloProvider } from 'react-apollo'

describe('LandingPage', () => {
  let client

  beforeEach(() => {
    client = testClient({ language: 'en' })
  })

  it('renders', () => {
    mount(
      <ApolloProvider client={client}>
        <LandingPage />
      </ApolloProvider>,
    )
  })
})
