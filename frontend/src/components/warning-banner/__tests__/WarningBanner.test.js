import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { WarningBanner } from '../'
import { render, cleanup } from '@testing-library/react'

describe('<WarningBanner />', () => {
  afterEach(cleanup)

  it('renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <WarningBanner />
      </ThemeProvider>,
    )
  })

  it('renders using the bg color prop correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <WarningBanner bg="blue" />
      </ThemeProvider>,
    )
    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#005ea5')
  })

  it('renders with a yellow bg if no bg color prop specified', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ colors: { yellow: '#010100' } }}>
        <WarningBanner lang="en" />
      </ThemeProvider>,
    )
    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#010100')
  })
})
