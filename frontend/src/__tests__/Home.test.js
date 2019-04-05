import React from 'react'
import {
  createMemorySource,
  createHistory,
  LocationProvider,
} from '@reach/router'
import wait from 'waait'
import {
  GET_LANGUAGE_QUERY,
  GET_STATS_QUERY,
} from '../utils/queriesAndMutations'
import { render, cleanup } from 'react-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'
import { Home } from '../Home'

let mocks = [
  {
    request: { query: GET_LANGUAGE_QUERY },
    result: { data: { language: 'en' } },
  },
  {
    request: { query: GET_STATS_QUERY },
    result: { data: { stats: { reportCount: 555 } } },
  },
]
describe('<Home/>', () => {
  afterEach(cleanup)

  describe('navigating to /', () => {
    it('displays the Page 1 header', async () => {
      let history = createHistory(createMemorySource('/'))

      let { getAllByText } = render(
        <MockedProvider mocks={mocks}>
          <LocationProvider history={history}>
            <Home />
          </LocationProvider>
        </MockedProvider>,
      )
      await wait(0) // Wait for promises to resolve

      expect(getAllByText(/Do you suspect a scam/)).toHaveLength(1)
    })
  })
})
