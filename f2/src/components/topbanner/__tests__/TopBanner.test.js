import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
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
      <ThemeProvider theme={canada}>
        <I18nProvider i18n={i18n}>
          <TopBanner lang="en" />
        </I18nProvider>
      </ThemeProvider>,
    )
    const test = getByRole('img')
    expect(test.getAttribute('alt')).toBe('Royal Canadian Mounted Police')
  })
})
