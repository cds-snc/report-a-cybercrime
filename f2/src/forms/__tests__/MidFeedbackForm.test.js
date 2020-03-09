import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import en from '../../locales/en.json'
import canada from '../../theme/canada'
import { MidFeedbackForm } from '../MidFeedbackForm'

i18n.load('en', { en })
i18n.activate('en')

const clickOn = element => fireEvent.click(element)

describe('<MidFeedbackForm />', () => {
  afterEach(cleanup)

  it('does not call the onSubmit function when the form is submitted empty', async () => {
    const submitMock = jest.fn()

    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <MidFeedbackForm onSubmit={submitMock} />
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const openButton = getByText('midFeedback.summary')
    openButton.click()

    /// find the next button so we can trigger a form submission
    const submitButton = getByText(/submit/)
    // Click the next button to trigger the form submission
    clickOn(submitButton.parentElement)
    await wait(0) // Wait for promises to resolve

    // We expect that sequence of events to have caused our onSubmit mock to get
    // not executed. No data was entered.
    expect(submitMock).toHaveBeenCalledTimes(0)
  })
  it('calls the onSubmit function when the form is submitted non-empty', async () => {
    const submitMock = jest.fn()

    const { getByText, getByLabelText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <MidFeedbackForm onSubmit={submitMock} />
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const openButton = getByText('midFeedback.summary')
    openButton.click()

    // find the next button so we can trigger a form submission
    const submitButton = getByText(/submit/)

    //Click on a checkbox
    const checkbox = getByLabelText('midFeedback.problem.confusing')
    clickOn(checkbox)

    // Click the next button to trigger the form submission
    clickOn(submitButton.parentElement)
    await wait(0) // Wait for promises to resolve

    // We expect that sequence of events to have caused our onSubmit mock to get
    // not executed. No data was entered.
    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
