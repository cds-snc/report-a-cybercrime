import React from 'react'
import wait from 'waait'
import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'
import { I18nProvider } from '@lingui/react'
import { Stats } from '../Stats'
import en from '../../locale/en/messages.js'
import { IDENTIFIER_FLAGGINGS_WITHIN } from '../utils/queriesAndMutations'
const catalogs = { en }

let mocks = [
  {
    request: {
      query: IDENTIFIER_FLAGGINGS_WITHIN,
      variables: { identifier: '555-555-5555' },
    },
    result: {
      data: {
        stats: {
          identifierFlaggingsWithin: {
            identifier: '555-555-5555',
            summary: [
              { date: 'Monday', total: 6 },
              { date: 'Tuesday', total: 9 },
              { date: 'Wednesday', total: 23 },
              { date: 'Thursday', total: 30 },
              { date: 'Friday', total: 54 },
            ],
          },
        },
      },
    },
  },
]

describe('<Stats/>', () => {
  describe('when the API returns data', () => {
    it('displays stats', async () => {
      /* eslint-disable no-console */
      let warn = console.warn
      console.warn = jest.fn()
      let wrapper = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <Stats />
          </I18nProvider>
        </MockedProvider>,
      )

      await wait(0)
      expect(wrapper.text()).toMatch('')
      console.warn = warn
      /* eslint-enable no-console */
    })
  })

  describe('when loading', () => {
    it('displays an empty string', async () => {
      let wrapper = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <Stats />
          </I18nProvider>
        </MockedProvider>,
      )

      expect(wrapper.text()).toMatch('')
    })
  })

  describe('when an error is raised', () => {
    it('displays an error message', async () => {
      /* eslint-disable no-console */
      let warn = console.warn
      console.warn = jest.fn()
      let mocks = [
        {
          request: {
            query: IDENTIFIER_FLAGGINGS_WITHIN,
            variables: { identifier: '555-555-5555' },
          },
          error: new Error('sadness'),
        },
      ]

      let wrapper = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <Stats />
          </I18nProvider>
        </MockedProvider>,
      )

      await wait(0)
      expect(wrapper.text()).toMatch(/sadness/)
      console.warn = warn
      /* eslint-enable no-console */
    })
  })
})
