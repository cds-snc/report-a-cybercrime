import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { render, cleanup } from '@testing-library/react'
import { Checkbox } from '../'

describe('<Checkbox />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={canada}>
        <Checkbox>foo</Checkbox>
      </ThemeProvider>,
    )

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })
})
