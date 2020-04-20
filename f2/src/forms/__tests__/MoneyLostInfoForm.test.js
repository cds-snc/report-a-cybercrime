import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import en from '../../locales/en.json'
import canada from '../../theme/canada'
import { StateProvider, initialState, reducer } from '../../utils/state'
import { validate, MoneyLostInfoForm } from '../MoneyLostInfoForm'

i18n.load('en', { en })
i18n.activate('en')

const clickOn = (element) => fireEvent.click(element)
describe('validation', () => {
  afterEach(cleanup)

  it('passes correct transaction day', () => {
    expect(validate({ transactionDay: '1' }).transactionDay).toBeUndefined()
    expect(validate({ transactionDay: '01' }).transactionDay).toBeUndefined()
    expect(validate({ transactionDay: '20' }).transactionDay).toBeUndefined()
    expect(validate({ transactionDay: '28' }).transactionDay).toBeUndefined()
  })

  it('fails incorrect transaction day', () => {
    expect(validate({ transactionDay: '0' }).transactionDay).not.toBeUndefined()
    expect(
      validate({ transactionDay: '00' }).transactionDay,
    ).not.toBeUndefined()
    expect(
      validate({ transactionDay: '32' }).transactionDay,
    ).not.toBeUndefined()
  })

  it('passes correct transaction month', () => {
    expect(validate({ transactionMonth: '1' }).transactionMonth).toBeUndefined()
    expect(
      validate({ transactionMonth: '01' }).transactionMonth,
    ).toBeUndefined()
    expect(
      validate({ transactionMonth: '12' }).transactionMonth,
    ).toBeUndefined()
    expect(
      validate({ transactionMonth: '08' }).transactionMonth,
    ).toBeUndefined()
  })

  it('fails incorrect transaction month', () => {
    expect(
      validate({ transactionMonth: '0' }).transactionMonth,
    ).not.toBeUndefined()
    expect(
      validate({ transactionMonth: '00' }).transactionMonth,
    ).not.toBeUndefined()
    expect(
      validate({ transactionMonth: '13' }).transactionMonth,
    ).not.toBeUndefined()
  })


  it('passes correct transaction year', () => {
    expect(
      validate({ transactionYear: '1900' }).transactionYear,
    ).toBeUndefined()
    expect(
      validate({ transactionYear: '2020' }).transactionYear,
    ).toBeUndefined()
    expect(
      validate({ transactionYear: '0001' }).transactionYear,
    ).toBeUndefined()
  })

  it('fails incorrect transaction year', () => {
    expect(
      validate({ transactionYear: '000' }).transactionYear,
    ).not.toBeUndefined()
    expect(
      validate({ transactionYear: '0000' }).transactionYear,
    ).not.toBeUndefined()
    expect(
      validate({ transactionYear: '202' }).transactionYear,
    ).not.toBeUndefined()
    expect(
      validate({ transactionYear: '20' }).transactionYear,
    ).not.toBeUndefined()
  })

  it('pass correct transaction date in Leap year', () => {
    expect(
      validate({
        transactionDay: '29',
        transactionMonth: '2',
        transactionYear: '2020',
      }).transactionDay,
    ).toBeUndefined()
    expect(
      validate({
        transactionDay: '29',
        transactionMonth: '02',
        transactionYear: '2016',
      }).transactionDay,
    ).toBeUndefined()
  })
  it('fails incorrect transaction date in Leap year', () => {
    expect(
      validate({
        transactionDay: '30',
        transactionMonth: '2',
        transactionYear: '2020',
      }).transactionDay,
    ).not.toBeUndefined()
    expect(
      validate({
        transactionDay: '30',
        transactionMonth: '2',
        transactionYear: '2016',
      }).transactionDay,
    ).not.toBeUndefined()
  })
  it('pass correct transaction date in non-Leap year', () => {
    expect(
      validate({
        transactionDay: '28',
        transactionMonth: '2',
        transactionYear: '2017',
      }).transactionDay,
    ).toBeUndefined()
    expect(
      validate({
        transactionDay: '28',
        transactionMonth: '02',
        transactionYear: '2017',
      }).transactionDay,
    ).toBeUndefined()
  })
  it('fails incorrect transaction date in non-Leap year', () => {
    expect(
      validate({
        transactionDay: '29',
        transactionMonth: '2',
        transactionYear: '2017',
      }).transactionDay,
    ).not.toBeUndefined()
    expect(
      validate({
        transactionDay: '29',
        transactionMonth: '2',
        transactionYear: '2017',
      }).transactionDay,
    ).not.toBeUndefined()
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
              <MoneyLostInfoForm onSubmit={submitMock} />
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
