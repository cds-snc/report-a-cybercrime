import React from 'react'
import wait from 'waait'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { WhatHappenedForm } from '../WhatHappenedForm'
import en from '../../../../locale/en/messages.js'
import theme from '../../../theme'

const catalogs = { en }

const client = {
  readQuery: () => ({
    whatHappened: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

const fillIn = (element, { with: value }) =>
  fireEvent.change(element, { target: { value } })

const clickOn = element => fireEvent.click(element)

describe('<WhatHappenedForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <ApolloProvider client={client}>
              <WhatHappenedForm onSubmit={submitMock} />
            </ApolloProvider>
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )

    // find the form element by it's label:
    const inputNode = getByLabelText('What happened?')
    // find the next button so we can trigger a form submission
    const nextButton = getByText(/Continue/i)
    // Enter text into the form field
    fillIn(inputNode, { with: 'lost money' })
    // Click the next button to trigger the form submission
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    // We expect that sequence of events to have caused our onSubmit mock to get
    // exectuted.
    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
