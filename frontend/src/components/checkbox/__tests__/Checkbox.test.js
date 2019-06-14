import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { render, cleanup } from '@testing-library/react'
import { Checkbox } from '../'

describe('<Checkbox />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <Checkbox label="foo" />
      </ThemeProvider>,
    )

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })

  it('uses styling props correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Checkbox label="foo" fontSize="34pt" checkscale="2" />
      </ThemeProvider>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyle('font-size: 34pt;')
  })
})
