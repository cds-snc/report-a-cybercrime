import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { LocationInfoForm, validate } from '../LocationInfoForm'
import en from '../../locales/en.json'
import canada from '../../theme/canada'
import { StateProvider, initialState, reducer } from '../../utils/state'

i18n.load('en', { en })
i18n.activate('en')

const clickOn = (element) => fireEvent.click(element)

describe('postal code validation', () => {
  afterEach(cleanup)

  it('passes empty or correct postal codes', () => {
    expect(validate({ postalCode: '' }).postalCode).toBeUndefined()
    expect(validate({ postalCode: 'a1a2b2' }).postalCode).toBeUndefined()
    expect(validate({ postalCode: 'a1a 2b2' }).postalCode).toBeUndefined()
    expect(validate({ postalCode: 'A1a2B2' }).postalCode).toBeUndefined()
  })

  it('fails incorrect postal codes', () => {
    expect(validate({ postalCode: 'bad code' }).postalCode).not.toBeUndefined()
    expect(validate({ postalCode: '12345' }).postalCode).not.toBeUndefined()
    expect(validate({ postalCode: 'a1a242' }).postalCode).not.toBeUndefined()
  })
})

describe('<LocationInfoForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <LocationInfoForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    // find the next button so we can trigger a form submission
    const nextButton = getByText(/nextButton/)

    // Click the next button to trigger the form submission
    clickOn(nextButton.parentElement)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
