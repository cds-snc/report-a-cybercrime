import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { render, cleanup } from '@testing-library/react'
import { PhaseBanner } from '../'
import en from '../../../locales/en.json'

i18n.load('en', { en })
i18n.activate('en')

describe('<PhaseBanner />', () => {
  beforeEach(() => (global.scrollTo = jest.fn()))
  afterEach(cleanup)

  it('properly renders alpha banner', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <I18nProvider i18n={i18n}>
          <PhaseBanner phase="ALPHA" />
        </I18nProvider>
      </ThemeProvider>,
    )

    const test = getAllByText(/ALPHA/)
    expect(test).toHaveLength(1)
  })
})
