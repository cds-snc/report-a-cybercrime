import React from 'react'
import { i18n } from '@lingui/core'
import { MemoryRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import en from '../../../locales/en.json'
import canada from '../../../theme/canada'
import { StateProvider, initialState, reducer } from '../../../utils/state'
import { Page } from '../index.js'

i18n.load('en', { en })
i18n.activate('en')

describe('<CancelPage />', () => {
  beforeEach(() => (global.scrollTo = jest.fn()))
  afterEach(cleanup)

  it('renders', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <StateProvider initialState={initialState} reducer={reducer}>
            <I18nProvider i18n={i18n}>
              <Page>hello</Page>
            </I18nProvider>
          </StateProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
  })
})
