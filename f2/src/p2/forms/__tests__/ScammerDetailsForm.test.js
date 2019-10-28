import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ScammerDetailsForm } from '../ScammerDetailsForm'
import en from '../../../locales/en.js'
import theme from '../../../theme'

i18n.load('en', { en })
i18n.activate('en')

const client = {
  readQuery: () => ({
    scammerDetails: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

const clickOn = element => fireEvent.click(element)

describe('<ScammerDetailsForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <I18nProvider i18n={i18n}>
            <ApolloProvider client={client}>
              <ScammerDetailsForm onSubmit={submitMock} />
            </ApolloProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const nextButton = getByRole('button')

    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
