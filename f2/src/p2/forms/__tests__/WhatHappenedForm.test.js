import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { WhatHappenedForm } from '../WhatHappenedForm'
import en from '../../../locales/en.js'
import theme from '../../../theme'

i18n.load('en', { en })
i18n.activate('en')

const client = {
  readQuery: () => ({
    whatHappened: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

const clickOn = element => fireEvent.click(element)

describe('<WhatHappenedForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <MockedProvider mocks={[]} addTypename={false}>
            <I18nProvider i18n={i18n}>
              <ApolloProvider client={client}>
                <WhatHappenedForm onSubmit={submitMock} />
              </ApolloProvider>
            </I18nProvider>
          </MockedProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    // find the next button so we can trigger a form submission
    const nextButton = getByRole('button')
    // Click the next button to trigger the form submission
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    // We expect that sequence of events to have caused our onSubmit mock to get
    // exectuted.
    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
