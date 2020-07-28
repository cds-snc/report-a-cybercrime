import React from 'react'
import { i18n } from '@lingui/core'
import { render, cleanup, screen } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { MemoryRouter } from 'react-router-dom'
import { StateProvider, initialState, reducer } from '../../utils/state'

describe('<RedirectRoute />', () => {
  afterEach(cleanup)

  it('properly renders next button with cancel button beside', () => {
    const { getAllByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <StateProvider initialState={initialState} reducer={reducer}>
            <RedirectRoute path="/howdiditstart">ABC</RedirectRoute>
          </StateProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    screen.debug()
  })
})
