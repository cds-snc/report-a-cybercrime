import React from 'react'
import wait from 'waait'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ContactedForm } from '../ContactedForm'
import en from '../../../locale/en/messages.js'
import theme from '../../theme'

const catalogs = { en }

const fillIn = (element, { with: value }) =>
  fireEvent.change(element, { target: { value } })

const clickOn = element => fireEvent.click(element)

describe('<ContactedForm/>', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <ContactedForm onSubmit={submitMock} />
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )

    const inputNode = getByLabelText('When were you contacted?')
    const nextButton = getByText(/Next/i)

    fillIn(inputNode, { with: 'today' })
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
    expect(submitMock).toHaveBeenCalledWith(
      expect.any(Object), // client
      { whenWereYouContacted: 'today' }, // data
    )
  })

  // it('displays error message if no content submitted', async () => {
  //   const submitMock = jest.fn()

  //   const { getByText } = render(
  //     <MockedProvider mocks={[]} addTypename={false}>
  //       <I18nProvider language={'en'} catalogs={catalogs}>
  //         <ContactedForm onSubmit={submitMock} />
  //       </I18nProvider>
  //     </MockedProvider>,
  //   )
  //   const nextButton = getByText(/Next/i)
  //   clickOn(nextButton)
  //   await wait(0) // Wait for promises to resolve

  //   expect(submitMock).not.toHaveBeenCalled()
  //   getByText(/Please complete the text box to tell us what happened./i)
  // })
})
