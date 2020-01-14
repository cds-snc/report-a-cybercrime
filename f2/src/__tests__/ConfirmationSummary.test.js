import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import { ConfirmationSummary } from '../ConfirmationSummary'
import canada from '../theme/canada'
import en from '../locales/en.json'
import { StateProvider, initialState, reducer } from '../utils/state'
import { IntlProvider } from 'react-intl'

i18n.load('en', { en })
i18n.activate('en')

describe('<ConfirmationSummary />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <IntlProvider locale={i18n.locale}>
          <ThemeProvider theme={canada}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <I18nProvider i18n={i18n}>
                <ConfirmationSummary />
              </I18nProvider>
            </StateProvider>
          </ThemeProvider>
        </IntlProvider>
      </MemoryRouter>,
    )
  })
})
