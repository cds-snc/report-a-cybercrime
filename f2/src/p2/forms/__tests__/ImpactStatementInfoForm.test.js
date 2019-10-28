import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ImpactStatementInfoForm } from '../ImpactStatementInfoForm'
import en from '../../../locales/en.js'
import theme from '../../../theme'

i18n.load('en', { en })
i18n.activate('en')

const client = {
  readQuery: () => ({
    impact: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

// const fillIn = (element, { with: value }) =>
//   fireEvent.change(element, { target: { value } })

const clickOn = element => fireEvent.click(element)

describe('<ImpactStatementInfoForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <MockedProvider mocks={[]} addTypename={false}>
            <I18nProvider i18n={i18n}>
              <ApolloProvider client={client}>
                <ImpactStatementInfoForm onSubmit={submitMock} />
              </ApolloProvider>
            </I18nProvider>
          </MockedProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const nextButton = getByRole('button')

    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
