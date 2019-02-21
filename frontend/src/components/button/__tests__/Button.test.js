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

  it('has correct default styling', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>foo</Button>
      </ThemeProvider>,
    )
    const test = getByText(/foo/)

    expect(test).toHaveStyleRule('font-size', theme.fontSizes[2])
    expect(test).toHaveStyleRule('font-weight', 'normal')
    expect(test).toHaveStyleRule('line-height', String(theme.lineHeights[2]))
    expect(test).toHaveStyleRule('color', theme.colors.white)
    expect(test).toHaveStyleRule('background-color', 'green')
    expect(test).toHaveStyleRule('margin-top', theme.space[2])
    expect(test).toHaveStyleRule('padding-top', theme.space[1])
    expect(test).toHaveStyleRule('padding-bottom', theme.space[1])
    expect(test).toHaveStyleRule('padding-left', theme.space[2])
    expect(test).toHaveStyleRule('padding-right', theme.space[2])
  })

  it('uses styling props correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button
          fontSize="11pt"
          fontWeight="bold"
          lineHeight="6.6"
          bg="#1234"
          mb="66pt"
        >
          foo
        </Button>
      </ThemeProvider>,
    )
    const test = getByText(/foo/)

    expect(test).toHaveStyleRule('font-size', '11pt')
    expect(test).toHaveStyleRule('font-weight', 'bold')
    expect(test).toHaveStyleRule('line-height', '6.6')
    expect(test).toHaveStyleRule('background-color', '#1234')
    expect(test).toHaveStyleRule('margin-bottom', '66pt')
  })
})
