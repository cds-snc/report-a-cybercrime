import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { FinalFeedbackForm } from '../FinalFeedbackForm'
import en from '../../locales/en.json'
import canada from '../../theme/canada'
import { StateProvider, initialState, reducer } from '../../utils/state'

i18n.load('en', { en })
i18n.activate('en')

const clickOn = element => fireEvent.click(element)

describe('<FinalFeedbackForm />', () => {
  afterEach(cleanup)

  it('does not call the onSubmit function when the form is submitted empty', async () => {
    const submitMock = jest.fn()

    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <FinalFeedbackForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    // find the next button so we can trigger a form submission
    // we want to grab whatever is in the submit button as text, pass it to getByText
    const context = document.querySelector('[type="submit"]').textContent
    const nextButton = getByText(context)

    // Click the next button to trigger the form submission
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    // We expect that sequence of events to have caused our onSubmit mock to get
    // exectuted.
    expect(submitMock).toHaveBeenCalledTimes(0)
  })

  it('calls the onSubmit function when the form is submitted non-empty', async () => {
    const submitMock = jest.fn()

    const { getByText, getByLabelText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <FinalFeedbackForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    // find the next button so we can trigger a form submission
    // we want to grab whatever is in the submit button as text, pass it to getByText
    const context = document.querySelector('[type="submit"]').textContent
    const submitButton = getByText(context)

    const radioButton = getByLabelText('finalFeedback.wasServiceHard.easy')
    clickOn(radioButton)
    clickOn(submitButton)
    await wait(0) // Wait for promises to resolve
    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
