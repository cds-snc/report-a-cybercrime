import React from 'react'
import { i18n } from '@lingui/core'
import { MemoryRouter } from 'react-router-dom'
import wait from 'waait'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ContactInfoForm } from '../ContactInfoForm'
import en from '../../locales/en.json'
import canada from '../../theme/canada'

i18n.load('en', { en })
i18n.activate('en')

const client = {
  readQuery: () => ({
    contactInfo: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

const fillIn = (element, { with: value }) =>
  fireEvent.change(element, { target: { value } })

const clickOn = element => fireEvent.click(element)

describe('<ContactInfoForm />', () => {
  afterEach(cleanup)

  it.only('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getAllByRole, getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <MockedProvider mocks={[]} addTypename={false}>
            <I18nProvider i18n={i18n}>
              <ApolloProvider client={client}>
                <ContactInfoForm onSubmit={submitMock} />
              </ApolloProvider>
            </I18nProvider>
          </MockedProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const inputNode = getAllByRole('textbox')[0]
    const nextButton = getByRole('button')

    fillIn(inputNode, { with: 'Mallory' })
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
