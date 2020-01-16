import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { PrivacyConsentInfoForm } from '../PrivacyConsentInfoForm'
import en from '../../locales/en.json'
import canada from '../../theme/canada'
import { StateProvider, initialState, reducer } from '../../utils/state'

i18n.load('en', { en })
i18n.activate('en')

const clickOn = element => fireEvent.click(element)

describe('<PrivacyConsentInfoForm />', () => {
  afterEach(cleanup)

  it('does not call the onSubmit function when the consent box is not checked and the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <PrivacyConsentInfoForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const nextButton = getByRole('button')
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(0)
  })

  it('calls the onSubmit function when the consent box is checked and the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByRole, getByLabelText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <PrivacyConsentInfoForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const checkbox = getByLabelText('privacyConsentInfoForm.yes')
    const nextButton = getByRole('button')

    clickOn(checkbox)
    await wait(0) // Wait for promises to resolve
    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
