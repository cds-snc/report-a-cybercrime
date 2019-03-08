import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Footer } from '../'
import { render, cleanup } from 'react-testing-library'

describe('<Footer />', () => {
  afterEach(cleanup)

  it('renders children correctly', () => {
    const { getAllByText } = render(
      <Footer>
        <div>foo</div>
      </Footer>,
    )

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })

  it('render a black background by default', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ colors: { black: '#000' } }}>
        <Footer>
          <div>foo</div>
        </Footer>
      </ThemeProvider>,
    )

    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#000')
  })

  it('sets background color when bg prop is passed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <Footer bg="blue">
          <div>foo</div>
        </Footer>
      </ThemeProvider>,
    )

    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#005ea5')
  })
})
