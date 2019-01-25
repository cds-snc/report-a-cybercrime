import React from 'react'
import wait from 'waait'
import { render, fireEvent, cleanup } from 'react-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'
import { WhatHappenedForm } from '../WhatHappenedForm'
import { I18nProvider } from '@lingui/react'
import en from '../../locale/en/messages.js'
const catalogs = { en }

const fillIn = (element, { with: value }) =>
  fireEvent.change(element, { target: { value } })

const clickOn = element => fireEvent.click(element)

describe('<WhatHappenedForm/>', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByLabelText, getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <I18nProvider language={'en'} catalogs={catalogs}>
          <WhatHappenedForm onSubmit={submitMock} />
        </I18nProvider>
      </MockedProvider>,
    )

    const inputNode = getByLabelText('What Happened')
    const nextButton = getByText(/Next/i)

    fillIn(inputNode, { with: 'asdf' })
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
    expect(submitMock).toHaveBeenCalledWith(
      { whatHappened: 'asdf' },
      expect.any(Object), // Final form mutators
      expect.any(Function), // Final form completion function
    )
  })

  it('displays error message if no content submitted', async () => {
    const submitMock = jest.fn()

    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <I18nProvider language={'en'} catalogs={catalogs}>
          <WhatHappenedForm onSubmit={submitMock} />
        </I18nProvider>
      </MockedProvider>,
    )
    const nextButton = getByText(/Next/i)
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).not.toHaveBeenCalled()
    getByText(/Please complete the text box to tell us what happened./i)
  })
})
