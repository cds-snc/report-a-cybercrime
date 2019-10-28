import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { WarningBanner } from '../'
import { render, cleanup } from '@testing-library/react'
import en from '../../../locales/en.js'

i18n.load('en', { en })
i18n.activate('en')

describe('<WarningBanner />', () => {
  afterEach(cleanup)

  it('renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <I18nProvider i18n={i18n}>
          <WarningBanner />
        </I18nProvider>
      </ThemeProvider>,
    )
  })

  it('renders using the bg color prop correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <I18nProvider i18n={i18n}>
          <WarningBanner bg="blue" />
        </I18nProvider>
      </ThemeProvider>,
    )
    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#005ea5')
  })

  it('renders with a yellow bg if no bg color prop specified', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ colors: { yellow: '#010100' } }}>
        <I18nProvider i18n={i18n}>
          <WarningBanner lang="en" />
        </I18nProvider>
      </ThemeProvider>,
    )
    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#010100')
  })
})
