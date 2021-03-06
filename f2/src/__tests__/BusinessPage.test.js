import React from 'react'
import { i18n } from '@lingui/core'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { BusinessPage } from '../BusinessPage'
import canada from '../theme/canada'
import en from '../locales/en.json'
import { StateProvider, reducer } from '../utils/state'
import { formDefaults } from '../forms/defaultValues'
import { pages } from '../utils/nextWhatWasAffectedUrl'

i18n.load('en', { en })
i18n.activate('en')

describe('<BusinessPage />', () => {
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
              whatWasAffectedOptions: { ...pages },
            }}
            reducer={reducer}
          >
            <I18nProvider i18n={i18n}>
              <BusinessPage />
            </I18nProvider>
          </StateProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
  })
})
