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
import { HowDidItStartForm } from '../HowDidItStartForm'

i18n.load('en', { en })
i18n.activate('en')

const clickOn = (element) => fireEvent.click(element)

describe('<HowDidItStartForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when at least one option is checked and the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByText, getByLabelText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <HowDidItStartForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const checkbox = getByLabelText('howDidTheyReachYou.others')
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

  it('does not call the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <HowDidItStartForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const nextButton = getByText(/nextButton/)

    await act(async () => {
      // Click the next button to trigger the form submission
      clickOn(nextButton.parentElement)
      await wait(0) // Wait for promises to resolve
    })

    expect(submitMock).toHaveBeenCalledTimes(0)
  })
})
