import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { RadioButton } from '../'

describe('<Checkbox />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <RadioButton label="foo" />
      </ThemeProvider>,
    )

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })

  it('uses styling props correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <RadioButton label="foo" fontSize="34pt" checkscale="2" />
      </ThemeProvider>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyle('font-size: 34pt;')
  })
})
