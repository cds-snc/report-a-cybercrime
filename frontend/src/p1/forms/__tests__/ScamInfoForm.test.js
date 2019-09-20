import React from 'react'
import wait from 'waait'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ScamInfoForm } from '../ScamInfoForm'
import en from '../../../../locale/en/messages.js'
import theme from '../../../theme'

const catalogs = { en }

const client = {
  readQuery: () => ({
    scamInfo: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

const fillIn = (element, { with: value }) =>
  fireEvent.change(element, { target: { value } })

const clickOn = element => fireEvent.click(element)

describe('<ScamInfoForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByLabelText, getByRole } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <ApolloProvider client={client}>
              <ScamInfoForm onSubmit={submitMock} />
            </ApolloProvider>
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )

    const inputNode = getByLabelText('When did it start?')
    const nextButton = getByRole('button')

    fillIn(inputNode, { with: 'in person' })
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
