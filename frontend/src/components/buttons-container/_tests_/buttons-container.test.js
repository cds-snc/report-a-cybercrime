import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import {
  ButtonsContainer,
  ButtonsContainerLanding,
  ButtonsContainerYesNo,
} from '../'

describe('<ButtonsContainer />', () => {
  afterEach(cleanup)

  it('properly renders landing page button', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonsContainer
          buttonLink={true}
          cancel={false}
          landing={true}
          route="/p1/scaminfo"
        />
      </ThemeProvider>,
    )
    expect(getAllByText(/Report now/)).toHaveLength(1)
    expect(document.querySelector('a').getAttribute('href')).toBe(
      '/p1/scaminfo',
    )
  })

  it('properly renders next button with cancel button beside', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonsContainer buttonLink={false} cancel={true} cancelRoute="/p1/" />
      </ThemeProvider>,
    )
    expect(getAllByText(/Next/)).toHaveLength(1)
    expect(getAllByText(/Cancel/)).toHaveLength(1)
    expect(document.querySelector('a').getAttribute('href')).toBe('/p1/')
    expect(document.querySelector('button').getAttribute('type')).toBe('submit')
  })

  it('properly renders submit report with default cancel route', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonsContainer buttonLink={false} cancel={true} submit={true} />
      </ThemeProvider>,
    )
    expect(getAllByText(/Submit report/)).toHaveLength(1)
    expect(getAllByText(/Cancel/)).toHaveLength(1)
    expect(document.querySelector('a').getAttribute('href')).toBe('/p2/')
    expect(document.querySelector('button').getAttribute('type')).toBe('submit')
  })

  it('properly renders landing page buttons', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonsContainerLanding />
      </ThemeProvider>,
    )

    expect(getAllByText(/Prototype 1/)).toHaveLength(1)
    expect(getAllByText(/Prototype 2/)).toHaveLength(1)
  })

  it('properly renders yes no buttons', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonsContainerYesNo yesRoute="/yes/" noRoute="/no/" />
      </ThemeProvider>,
    )

    expect(getAllByText(/Yes/)).toHaveLength(1)
    expect(getAllByText(/No/)).toHaveLength(1)
  })
})
