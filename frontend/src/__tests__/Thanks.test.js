import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'
import { Thanks } from '../thanks'
import gql from 'graphql-tag'

describe('Thanks', () => {
  let mocks

  beforeEach(() => {
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
        <Thanks />
      </MockedProvider>,
    )
  })
})
