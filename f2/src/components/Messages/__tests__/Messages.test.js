import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { Alert, Well } from '..'

describe('<Alert>', () => {
  const foo = 'bar'

  it('Renders an Alert element', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <Alert status="success">{foo}</Alert>
      </ThemeProvider>,
    )

    const test = getAllByText(/bar/)
    expect(test).toHaveLength(1)
  })

  it('Has Alert styling properties', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Alert status="success">{foo}</Alert>
      </ThemeProvider>,
    )

    const test = getByText(/bar/)
    expect(test).toHaveStyleRule('background-color', expect.any(String))
    expect(test).toHaveStyleRule('border-left', '3px')
    expect(test).not.toHaveStyleRule('border-radius')
  })
})

describe('<Well>', () => {
  afterEach(cleanup)
  const foo = 'bar'

  it('Renders a Well element', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <Well>{foo}</Well>
      </ThemeProvider>,
    )

    const test = getAllByText(/bar/)
    expect(test).toHaveLength(1)
  })

  it('Has Well styling properties', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Well>{foo}</Well>
      </ThemeProvider>,
    )

    const test = getByText(/bar/)
    expect(test).toHaveStyleRule('background-color', expect.any(String))
    expect(test).toHaveStyleRule('box-shadow', expect.any(String))
    expect(test).toHaveStyleRule('box-shadow', expect.any(String))
    expect(test).toHaveStyleRule('border', expect.any(String))
    expect(test).toHaveStyleRule('border-radius', expect.any(String))
  })
})
