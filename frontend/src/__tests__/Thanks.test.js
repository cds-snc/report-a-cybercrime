import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import { Thanks } from '../thanks'
import { testClient } from '../utils/createTestClient'

describe('Thanks', () => {
  let mocks, client

  beforeEach(() => {
    client = testClient({ language: 'en' })
    const query = gql`
      query GetStats {
        stats {
          reportCount
        }
      }
    `
    mocks = [
      {
        request: { query },
        result: { data: { stats: { reportCount: 555 } } },
      },
    ]
  })

  it('renders', () => {
    mount(
      <MockedProvider mocks={mocks}>
        <ApolloProvider client={client}>
          <Thanks />
        </ApolloProvider>
      </MockedProvider>,
    )
  })
})
