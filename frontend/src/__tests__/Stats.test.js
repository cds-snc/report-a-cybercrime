import React from 'react'
import wait from 'waait'
import { render, cleanup } from 'react-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'
import { I18nProvider } from '@lingui/react'
import { Stats } from '../Stats'
import { Chart } from '../Chart'
import en from '../../locale/en/messages.js'
import { FLAGGINGS_WITHIN } from '../utils/queriesAndMutations'
const catalogs = { en }

let data = [
  {
    date: '2019-04-01',
    total: 1,
  },
  {
    date: '2019-04-02',
    total: 1,
  },
  {
    date: '2019-04-03',
    total: 3,
  },
  {
    date: '2019-04-04',
    total: 0,
  },
]

let mocks = [
  {
    request: {
      query: FLAGGINGS_WITHIN,
      variables: {
        identifier: '555-555-5555',
        startDate: '2019-04-01',
        endDate: '2019-04-04',
      },
    },
    result: {
      data: {
        stats: {
          flaggingsWithin: {
            identifier: '555-555-5555',
            summary: data,
          },
        },
      },
    },
  },
]

describe('<Stats/>', () => {
  afterEach(cleanup)
  describe('when the API returns data', () => {
    it(`calls it's child as a function`, async () => {
      /* eslint-disable no-console */
      let warn = console.warn
      console.warn = jest.fn()
      let { container } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <Stats
              identifier="555-555-5555"
              startDate="2019-04-01"
              endDate="2019-04-04"
            >
              {({ summary }) => (
                <Chart height={100} width={100} data={summary} />
              )}
            </Stats>
          </I18nProvider>
        </MockedProvider>,
      )

      // Wait for promise with data to resolve
      await wait(0)

      let chartLabels = Array.from(container.querySelectorAll('tspan')).map(
        e => e.innerHTML,
      )

      let dates = data.map(d => d.date)
      expect(chartLabels).toContain(...dates)
      console.warn = warn
      /* eslint-enable no-console */
    })
  })

  describe('when loading', () => {
    it('displays an empty string', async () => {
      /* eslint-disable no-console */
      let warn = console.warn
      console.warn = jest.fn()
      let { container } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <Stats
              identifier="555-555-5555"
              startDate="2019-04-01"
              endDate="2019-04-04"
            >
              {({ summary }) => (
                <Chart height={100} width={100} data={summary} />
              )}
            </Stats>
          </I18nProvider>
        </MockedProvider>,
      )

      let child = container.firstChild
      expect(child.textContent).toEqual('')
      console.warn = warn
      /* eslint-enable no-console */
    })
  })

  describe('when an error is raised', () => {
    it('displays an error message instead of the child', async () => {
      /* eslint-disable no-console */
      let warn = console.warn
      console.warn = jest.fn()
      let failureMock = [
        {
          request: {
            query: FLAGGINGS_WITHIN,
            variables: {
              identifier: '555-555-5555',
              startDate: '2019-04-01',
              endDate: '2019-04-04',
            },
          },
          error: new Error('sadness'),
        },
      ]

      let { container } = render(
        <MockedProvider mocks={failureMock} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <Stats
              identifier="555-555-5555"
              startDate="2019-04-01"
              endDate="2019-04-04"
            >
              {({ summary }) => (
                <Chart height={100} width={100} data={summary} />
              )}
            </Stats>
          </I18nProvider>
        </MockedProvider>,
      )

      await wait(0)
      let child = container.firstChild
      expect(child.textContent).toMatch(/sadness/)
      console.warn = warn
      /* eslint-enable no-console */
    })
  })
})
