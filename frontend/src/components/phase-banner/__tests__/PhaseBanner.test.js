import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { render, cleanup } from '@testing-library/react'
import { PhaseBanner } from '../'

describe('<PhaseBanner />', () => {
  afterEach(cleanup)

  it('properly renders alpha banner', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <PhaseBanner />
      </ThemeProvider>,
    )

    const test = getAllByText(/ALPHA/)
    expect(test).toHaveLength(1)
  })
})
