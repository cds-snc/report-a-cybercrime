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
    it('displays a valid page', async () => {
      let history = createHistory(createMemorySource('/'))

      let { queryByTestId } = render(
        <MockedProvider mocks={mocks}>
          <LocationProvider history={history}>
            <Home />
          </LocationProvider>
        </MockedProvider>,
      )
      await wait(0) // Wait for promises to resolve
      expect(queryByTestId('Scam')).toBeNull()
    })
  })
  describe('navigating to /not-a-page', () => {
    it('displays page not found', async () => {
      let history = createHistory(createMemorySource('/not-a-page'))

      let { getAllByText } = render(
        <MockedProvider mocks={mocks}>
          <LocationProvider history={history}>
            <Home />
          </LocationProvider>
        </MockedProvider>,
      )
      await wait(0) // Wait for promises to resolve

      expect(getAllByText(/Page Not Found/)).toHaveLength(1)
    })
  })
})
