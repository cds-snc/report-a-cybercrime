import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { EditButton } from '../'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import en from '../../../locales/en.json'
import { MemoryRouter } from 'react-router-dom'

i18n.load('en', { en })
i18n.activate('en')

describe('<EditButton />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <MemoryRouter>
        <I18nProvider i18n={i18n}>
          <ThemeProvider theme={canada}>
            <EditButton path="/" label="foo" />
          </ThemeProvider>
        </I18nProvider>
      </MemoryRouter>,
    )
  })
})
