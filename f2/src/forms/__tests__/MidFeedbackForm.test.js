import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import en from '../../locales/en.json'
import canada from '../../theme/canada'
import { MidFeedbackForm } from '../MidFeedbackForm'

i18n.load('en', { en })
i18n.activate('en')

const clickOn = element => fireEvent.click(element)

describe('<WhatHappenedForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByText } = render(
      <ThemeProvider theme={canada}>
        <I18nProvider i18n={i18n}>
          <MidFeedbackForm onSubmit={submitMock} />
        </I18nProvider>
      </ThemeProvider>,
    )

    // find the next button so we can trigger a form submission
    // we want to grab whatever is in the submit button as text, pass it to getByText
    const context = document.querySelector('[type="submit"]').textContent
    const submitButton = getByText(context)
    // Click the next button to trigger the form submission
    clickOn(submitButton)
    await wait(0) // Wait for promises to resolve

    // We expect that sequence of events to have caused our onSubmit mock to get
    // exectuted.
    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
