import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { render, fireEvent, cleanup, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import en from '../../locales/en.json'
import canada from '../../theme/canada'
import { StateProvider, initialState, reducer } from '../../utils/state'
import { WhenDidItHappenForm } from '../WhenDidItHappenForm'

i18n.load('en', { en })
i18n.activate('en')

const clickOn = (element) => fireEvent.click(element)

describe('<WhenDidItHappenForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when no selection has been made', async () => {
    const submitMock = jest.fn()

    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <WhenDidItHappenForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    // find the next button so we can trigger a form submission
    const nextButton = getByText(/nextButton/)

    // Click the next button to trigger the form submission
    await act(async () => {
      await wait(10) // Wait for promises to resolve
      clickOn(nextButton.parentElement)
    })

    expect(submitMock).toHaveBeenCalledTimes(1)
  })

  it('calls the onSubmit function when a selection has been made', async () => {
    const submitMock = jest.fn()

    const { getByText, getByLabelText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <WhenDidItHappenForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const checkbox = getByLabelText('whenDidItHappenPage.options.notSure')
    const nextButton = getByText(/nextButton/)

    await act(async () => {
      clickOn(checkbox)
      await wait(0)

      // Click the next button to trigger the form submission
      clickOn(nextButton.parentElement)
      await wait(0) // Wait for promises to resolve
    })

    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
