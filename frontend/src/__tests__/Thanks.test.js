import React from 'react'
import wait from 'waait'
import { render, cleanup } from 'react-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'
import {
  GET_LANGUAGE_QUERY,
  GET_STATS_QUERY,
} from '../utils/queriesAndMutations'
import { I18nProvider } from '@lingui/react'
import en from '../../locale/en/messages.js'
import fr from '../../locale/fr/messages.js'
const catalogs = { en, fr }
import { Thanks } from '../Thanks'

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

describe('<Thanks/>', () => {
  afterEach(cleanup)

  it('displays a thank you message', async () => {
    let { getAllByText } = render(
      <MockedProvider mocks={mocks}>
        <Thanks />
      </MockedProvider>,
    )
    await wait(0) // Wait for promises to resolve

    expect(getAllByText(/Thank you/)).toHaveLength(1)
  })

  it('displays a thank you message in French', async () => {
    let { getAllByText } = render(
      <MockedProvider mocks={mocks}>
        <I18nProvider language={'fr'} catalogs={catalogs}>
          <Thanks />
        </I18nProvider>
      </MockedProvider>,
    )
    await wait(0) // Wait for promises to resolve

    expect(getAllByText(/Merci/)).toHaveLength(1)
  })

  it('links to French resources when the language is French', async () => {
    let frenchMocks = [
      {
        request: { query: GET_LANGUAGE_QUERY },
        result: { data: { language: 'fr' } },
      },
      {
        request: { query: GET_STATS_QUERY },
        result: { data: { stats: { reportCount: 555 } } },
      },
    ]
    let { getByText } = render(
      <MockedProvider mocks={frenchMocks}>
        <I18nProvider language={'fr'} catalogs={catalogs}>
          <Thanks />
        </I18nProvider>
      </MockedProvider>,
    )
    await wait(0) // Wait for promises to resolve

    let cyberLink = getByText(/Pensez cybersécurité/)
    let topTenLink = getByText(/Les dix meilleurs/)
    expect(cyberLink.href).toMatch(/fr/)
    expect(topTenLink.href).toMatch(/fr/)
  })
})
