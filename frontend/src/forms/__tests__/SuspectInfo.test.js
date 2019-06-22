import React from 'react'
import wait from 'waait'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { SuspectInfo } from '../SuspectInfo'
import en from '../../../locale/en/messages.js'
import theme from '../../theme'

const catalogs = { en }

const fillIn = (element, { with: value }) =>
  fireEvent.change(element, { target: { value } })

const clickOn = element => fireEvent.click(element)

describe('<SuspectInfo /> form', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <SuspectInfo onSubmit={submitMock} />
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )

    const inputNode = getByLabelText('Name')
    const nextButton = getByText(/Next/i)

    fillIn(inputNode, { with: 'Malory' })
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
    expect(submitMock).toHaveBeenCalledWith(
      expect.any(Object), // client
      { suspectName: 'Malory' }, // data
    )
  })
})
