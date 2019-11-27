import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { WarningBanner } from '../'
import { render, cleanup } from '@testing-library/react'
import en from '../../../locales/en.json'

i18n.load('en', { en })
i18n.activate('en')

describe('<WarningBanner />', () => {
  afterEach(cleanup)

  it('renders correctly', () => {
    render(
      <ThemeProvider theme={canada}>
        <I18nProvider i18n={i18n}>
          <WarningBanner />
        </I18nProvider>
      </ThemeProvider>,
    )
  })
})
