import React from 'react'
import { i18n } from '@lingui/core'
import { MemoryRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { PrivacyStatementPage } from '../PrivacyStatementPage'
import canada from '../theme/canada'
import en from '../locales/en.json'
import { StateProvider, reducer } from '../utils/state'
import { formDefaults } from '../forms/defaultValues'

i18n.load('en', { en })
i18n.activate('en')

describe('<PrivacyStatementPage />', () => {
  beforeEach(() => (global.scrollTo = jest.fn()))
  afterEach(cleanup)

  it('renders', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <StateProvider
            initialState={{
              formData: {
                ...formDefaults,
              },
            }}
            reducer={reducer}
          >
            <I18nProvider i18n={i18n}>
              <PrivacyStatementPage />
            </I18nProvider>
          </StateProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
  })
})
