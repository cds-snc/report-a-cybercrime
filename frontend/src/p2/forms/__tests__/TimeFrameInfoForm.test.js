import React from 'react'
import wait from 'waait'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { TimeFrameInfoForm } from '../TimeFrameInfoForm'
import en from '../../../../locale/en/messages.js'
import theme from '../../../theme'

const catalogs = { en }

const client = {
  readQuery: () => ({
    timeFrame: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

const fillIn = (element, { with: value }) =>
  fireEvent.change(element, { target: { value } })

const clickOn = element => fireEvent.click(element)

describe('<TimeFrameInfoForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <ApolloProvider client={client}>
              <TimeFrameInfoForm onSubmit={submitMock} />
            </ApolloProvider>
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )

    const inputNode = getByLabelText('When did it start?')
    const inputFinal = getByLabelText(
      'When was your last interaction with the scammer?',
    )
    const nextButton = getByText(/Continue/i)

    fillIn(inputNode, { with: 'lost money' })
    fillIn(inputFinal, { with: 'lost money' })
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
