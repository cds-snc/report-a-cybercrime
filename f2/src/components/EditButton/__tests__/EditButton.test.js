import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { EditButton } from '../'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import en from '../../../locales/en.json'
import { MemoryRouter } from 'react-router-dom'
import { StateProvider, initialState, reducer } from '../../../utils/state'

i18n.load('en', { en })
i18n.activate('en')

describe('<EditButton />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <MemoryRouter>
        <StateProvider initialState={initialState} reducer={reducer}>
          <I18nProvider i18n={i18n}>
            <ThemeProvider theme={canada}>
              <EditButton path="/" label="foo" />
            </ThemeProvider>
          </I18nProvider>
        </StateProvider>
      </MemoryRouter>,
    )
  })

  it('shows the edit button if not submitted', () => {
    const { queryAllByText } = render(
      <MemoryRouter>
        <StateProvider initialState={initialState} reducer={reducer}>
          <I18nProvider i18n={i18n}>
            <ThemeProvider theme={canada}>
              <EditButton path="/" label="foo" />
            </ThemeProvider>
          </I18nProvider>
        </StateProvider>
      </MemoryRouter>,
    )
    const editButtons = queryAllByText(/button.edit/)
    expect(editButtons).toHaveLength(1)
  })

  it('hides the edit button if submitted', () => {
    const { queryAllByText } = render(
      <MemoryRouter>
        <StateProvider initialState={{ submitted: true }} reducer={reducer}>
          <I18nProvider i18n={i18n}>
            <ThemeProvider theme={canada}>
              <EditButton path="/" label="foo" />
            </ThemeProvider>
          </I18nProvider>
        </StateProvider>
      </MemoryRouter>,
    )
    const editButtons = queryAllByText(/button.edit/)
    expect(editButtons).toHaveLength(0)
  })
})
