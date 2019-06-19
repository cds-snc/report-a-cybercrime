import React from 'react'
import wait from 'waait'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { MoneyLost } from '../MoneyLost'
import en from '../../../locale/en/messages.js'
import theme from '../../theme'

const catalogs = { en }

const fillIn = (element, { with: value }) =>
  fireEvent.change(element, { target: { value } })

const clickOn = element => fireEvent.click(element)

describe('<MoneyLost/> form', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <MoneyLost onSubmit={submitMock} />
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )

    const inputNode = getByLabelText('Amount')
    const nextButton = getByText(/Next/i)

    fillIn(inputNode, { with: '$10,000' })
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
    expect(submitMock).toHaveBeenCalledWith(
      expect.any(Object), // client
      { amount: '$10,000' }, // data
    )
  })
})
