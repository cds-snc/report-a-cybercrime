import React from 'react'
import { i18n } from '@lingui/core'
import { MemoryRouter } from 'react-router-dom'
import wait from 'waait'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { validate, ContactInfoForm } from '../ContactInfoForm'
import en from '../../locales/en.json'
import canada from '../../theme/canada'
import { StateProvider, initialState, reducer } from '../../utils/state'

i18n.load('en', { en })
i18n.activate('en')

const fillIn = (element, { with: value }) =>
  fireEvent.change(element, { target: { value } })

const clickOn = (element) => fireEvent.click(element)
describe('validation', () => {
  afterEach(cleanup)

  it('passes correct email address', () => {
    expect(validate({ email: 'aaaa@aaa.com' }).email).toBeUndefined()
    expect(validate({ phone: 'aaa.aaa@aaa.com' }).phone).toBeUndefined()
    expect(validate({ phone: 'aaa@aaa-aaa.com' }).phone).toBeUndefined()
  })

  it('fails incorrect email address', () => {
    expect(validate({ email: 'aaaaaa.com' }).email).not.toBeUndefined()
})

  it('passes correct phone numbers', () => {
    expect(validate({ phone: '1234567890' }).phone).toBeUndefined()
    expect(validate({ phone: '123 456 7890' }).phone).toBeUndefined()
    expect(validate({ phone: '123-456-7890' }).phone).toBeUndefined()
    expect(validate({ phone: '123.456.7890' }).phone).toBeUndefined()
    expect(validate({ phone: '(123) 456-7890' }).phone).toBeUndefined()
    expect(validate({ phone: '(123)456-7890' }).phone).toBeUndefined()
  })

  it('fails incorrect phone numbers', () => {
    expect(validate({ phone: '123456789' }).phone).not.toBeUndefined()
    expect(validate({ phone: 'not a number' }).phone).not.toBeUndefined()
  })


describe('<ContactInfoForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getAllByRole, getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <ContactInfoForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const inputNode = getAllByRole('textbox')[0]

    // find the next button so we can trigger a form submission
    const nextButton = getByText(/nextButton/)

    fillIn(inputNode, {
      with: 'Mallory',
    })

    // Click the next button to trigger the form submission
    clickOn(nextButton.parentElement)

    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
