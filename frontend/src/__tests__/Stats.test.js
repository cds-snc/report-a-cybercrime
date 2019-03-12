import React from 'react'
import wait from 'waait'
import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'
import { I18nProvider } from '@lingui/react'
import gql from 'graphql-tag'
import { Stats } from '../Stats'
import en from '../../locale/en/messages.js'
const catalogs = { en }

describe('<Stats/>', () => {
  describe('when the API returns data', () => {
    it('displays stats', async () => {
      let mocks = [
        {
          request: {
            query: gql`
              query GetStats {
                stats {
                  reportCount
                }
              }
            `,
          },
          result: { data: { stats: { reportCount: 5 } } },
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
      expect(wrapper.text()).toMatch(/You are the 5th person/)
    })
  })

  describe('when loading', () => {
    it('displays an empty string', async () => {
      let mocks = [
        {
          request: {
            query: gql`
              query GetStats {
                stats {
                  reportCount
                }
              }
            `,
          },
          result: { data: { stats: { reportCount: 5 } } },
        },
      ]

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
      let mocks = [
        {
          request: {
            query: gql`
              query GetStats {
                stats {
                  reportCount
                }
              }
            `,
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
    })
  })
})
