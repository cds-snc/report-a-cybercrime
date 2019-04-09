import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { ButtonLink } from '..'

describe('<Button />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonLink>
          <em>foo</em>
        </ButtonLink>
      </ThemeProvider>,
    )
    expect(getAllByText(/foo/)).toHaveLength(1)
  })

  it('uses styling props correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonLink
          fontSize="11pt"
          fontWeight="bold"
          lineHeight="6.6"
          bg="#1234"
          mb="66pt"
        >
          foo
        </ButtonLink>
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
