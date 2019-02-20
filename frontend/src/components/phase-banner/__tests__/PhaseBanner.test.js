import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { render, cleanup } from 'react-testing-library'
import { PhaseBanner } from '../'

describe('<PhaseBanner />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <PhaseBanner phase="test" phaseColor="blue">
          <em>foo</em>
        </PhaseBanner>
      </ThemeProvider>,
    )

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })

  it('phaseColour chooses one of the colors in the theme object', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ colors: { dodgerblue: 'rgb(30, 144, 255)' } }}>
        <PhaseBanner phase="test" phaseColor="dodgerblue">
          foo
        </PhaseBanner>
      </ThemeProvider>,
    )

    const test = getByText(/test/)
    // theme blue is '#005ea5' which
    // styled system translates to rgb(0, 94, 165);
    expect(test).toHaveStyle('background-color: rgb(30, 144, 255);')
  })
})
