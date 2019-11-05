import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { MemoryRouter } from 'react-router-dom'
import { NextAndCancelButtons } from '../'
import en from '../../../locales/en.json'

i18n.load('en', { en })
i18n.activate('en')

describe('<NextAndCancelButtons />', () => {
  afterEach(cleanup)

  it('properly renders next button with cancel button beside', () => {
    const { getAllByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <I18nProvider i18n={i18n}>
            <NextAndCancelButtons>
              Next: Confirm information
            </NextAndCancelButtons>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
    expect(getAllByText(/Next/)).toHaveLength(1)
    expect(getAllByText(/button.cancelReport/)).toHaveLength(1)
    expect(document.querySelector('a').getAttribute('href')).toBe('/')
    expect(document.querySelector('button').getAttribute('type')).toBe('submit')
  })
})
