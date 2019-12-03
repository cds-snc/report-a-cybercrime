import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { MemoryRouter } from 'react-router-dom'
import canada from '../../../theme/canada'
import { BackButton } from '../'
import en from '../../../locales/en.json'

i18n.load('en', { en })
i18n.activate('en')

describe('<Button />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <BackButton route="/future">Back to the future</BackButton>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
    expect(getAllByText(/Back/)).toHaveLength(1)
    expect(document.querySelector('a').getAttribute('href')).toBe('/future')
  })
})
