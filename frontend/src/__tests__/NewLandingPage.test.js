import React from 'react'
import wait from 'waait'
import { I18nProvider } from '@lingui/react'
import en from '../../locale/en/messages.js'
import fr from '../../locale/fr/messages.js'
const catalogs = { en, fr }
import { render, cleanup } from 'react-testing-library'
import { NewLandingPage } from '../NewLandingPage'

describe('<NewLandingPage/>', () => {
  afterEach(cleanup)

  it('displays a coming soon message on the root route', async () => {
    let { getAllByText } = render(<NewLandingPage />)
    await wait(0) // Wait for promises to resolve

    expect(getAllByText(/Coming soon/)).toHaveLength(1)
  })

  it('displays a thank you message in French', async () => {
    let { getAllByText } = render(
      <I18nProvider language={'fr'} catalogs={catalogs}>
        <NewLandingPage />
      </I18nProvider>,
    )
    await wait(0) // Wait for promises to resolve

    expect(
      getAllByText(
        /Nous voulons aider les personnes touchées par la cybercriminalité./,
      ),
    ).toHaveLength(1)
  })
})
