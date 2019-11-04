import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { TopBanner } from '../'
import { render, cleanup } from '@testing-library/react'
import en from '../../../locales/en.json'

i18n.load('en', { en })
i18n.activate('en')

xdescribe('<TopBanner />', () => {
  // TODO: this suite is commented out due to the following error:
  // Cannot find module '@lingui/loader!./locales/en.po' from 'i18n.config.js'
  // This error is webpack related. Explore options for getting jest to use
  // the lingui loader.
  // Is this possible with Create React App?

  afterEach(cleanup)

  it('renders using the language prop correctly', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <I18nProvider i18n={i18n}>
          <TopBanner lang="en" />
        </I18nProvider>
      </ThemeProvider>,
    )
    const test = getByRole('img')
    expect(test.getAttribute('alt')).toBe('Royal Canadian Mounted Police')
  })

  it('renders using the bg color prop correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <I18nProvider i18n={i18n}>
          <TopBanner lang="en" bg="blue" />
        </I18nProvider>
      </ThemeProvider>,
    )
    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#005ea5')
  })

  it('renders with a black bg if no bg color prop specified', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ colors: { black: '#000000' } }}>
        <I18nProvider i18n={i18n}>
          <TopBanner lang="en" />
        </I18nProvider>
      </ThemeProvider>,
    )
    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#000000')
  })
})
