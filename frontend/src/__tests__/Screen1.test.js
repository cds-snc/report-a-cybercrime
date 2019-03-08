import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'
import { Screen1 } from '../Screen1'
import { I18nProvider } from '@lingui/react'
import en from '../../locale/en/messages.js'
const catalogs = { en }

describe('<Screen1/>', () => {
  afterEach(cleanup)

  it('renders the expected text', () => {
    let { container } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <I18nProvider language={'en'} catalogs={catalogs}>
          <Screen1 />
        </I18nProvider>
      </MockedProvider>,
    )

    expect(container).toHaveTextContent('Describe what happened')
  })

  it('really fails', () => {
    expect(false).toBeTruthy()
  })
})
