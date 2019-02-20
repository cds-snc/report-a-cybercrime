import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { Button } from '../'

describe('<Button />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <Button>
          <em>foo</em>
        </Button>
      </ThemeProvider>,
    )
    expect(getAllByText(/foo/)).toHaveLength(1)
  })
})
