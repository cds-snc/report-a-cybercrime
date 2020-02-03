import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { Footer } from '../'
import { render, cleanup } from '@testing-library/react'
import en from '../../../locales/en.json'

i18n.load('en', { en })
i18n.activate('en')

describe('<Footer />', () => {
  afterEach(cleanup)

  it('renders children correctly', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={canada}>
        <I18nProvider i18n={i18n}>
          <Footer>
            <div>foo</div>
          </Footer>
        </I18nProvider>
      </ThemeProvider>,
    )

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })
})
