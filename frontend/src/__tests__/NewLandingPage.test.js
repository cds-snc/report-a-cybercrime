import React from 'react'
import { mount } from 'enzyme'
import { NewLandingPage } from '../NewLandingPage'
import { testClient } from '../utils/createTestClient'
import { ApolloProvider } from 'react-apollo'

describe('NewLandingPage', () => {
  let client

  beforeEach(() => {
    client = testClient({ language: 'en' })
  })

  it('renders', () => {
    mount(
      <ApolloProvider client={client}>
        <NewLandingPage />
      </ApolloProvider>,
    )
  })
})
