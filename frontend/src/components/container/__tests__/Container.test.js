import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Container } from '../'
import { render, cleanup } from '@testing-library/react'

describe('<Container />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <Container>
        <p>foo</p>
      </Container>,
    )

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })

  it('properly handles border props', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <Container border="1px solid" borderColor="blue">
          test
        </Container>
      </ThemeProvider>,
    )

    const test = getByText(/test/)
    expect(test).toHaveStyleRule('border', '1px solid')
    expect(test).toHaveStyleRule('border-color', '#005ea5')
  })

  it('properly handles color props', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <Container bg="blue" color="blue">
          test
        </Container>
      </ThemeProvider>,
    )

    const test = getByText(/test/)
    expect(test).toHaveStyleRule('background-color', '#005ea5')
    expect(test).toHaveStyleRule('color', '#005ea5')
  })

  it('properly handles dimension props', () => {
    const { getByText } = render(
      <Container width={400} height="2rem">
        test
      </Container>,
    )

    const test = getByText(/test/)
    expect(test).toHaveStyleRule('width', '400px')
    expect(test).toHaveStyleRule('height', '2rem')
  })

  it('properly handles space props', () => {
    const SPACING = ['0px', '5px']
    const { getByText } = render(
      <ThemeProvider theme={{ space: SPACING }}>
        <Container m="auto" ml={1} p={0} px={1}>
          test
        </Container>
      </ThemeProvider>,
    )

    const test = getByText(/test/)
    expect(test).toHaveStyleRule('margin', 'auto')
    expect(test).toHaveStyleRule('margin-left', '5px')
    expect(test).toHaveStyleRule('padding', '0px')
    expect(test).toHaveStyleRule('padding-left', '5px')
    expect(test).toHaveStyleRule('padding-right', '5px')
  })

  it('properly handles layout props', () => {
    const { getByText } = render(
      <Container display="inline-block">test</Container>,
    )

    const test = getByText(/test/)
    expect(test).toHaveStyleRule('display', 'inline-block')
  })

  it('properly handles flexbox props', () => {
    const { getByText } = render(
      <Container
        alignItems="center"
        alignContent="left"
        justifyContent="right"
        flexWrap="wrap"
        flexBasis="auto"
        flexDirection="column"
        flex="0 0 auto"
        justifySelf="center"
        alignSelf="center"
      >
        test
      </Container>,
    )

    const test = getByText(/test/)
    expect(test).toHaveStyleRule('align-items', 'center')
    expect(test).toHaveStyleRule('align-content', 'left')
    expect(test).toHaveStyleRule('justify-content', 'right')
    expect(test).toHaveStyleRule('flex-wrap', 'wrap')
    expect(test).toHaveStyleRule('flex-basis', 'auto')
    expect(test).toHaveStyleRule('flex-direction', 'column')
    expect(test).toHaveStyleRule('flex', '0 0 auto')
    expect(test).toHaveStyleRule('justify-self', 'center')
    expect(test).toHaveStyleRule('align-self', 'center')
  })

  it('properly handles text alignment props', () => {
    const { getByText } = render(<Container textAlign="right">test</Container>)

    const test = getByText(/test/)
    expect(test).toHaveStyleRule('text-align', 'right')
  })

  it('uses the position props to set type of positioning and positioning values in CSS', () => {
    const { getByText } = render(
      <Container
        position="absolute"
        zIndex="1"
        top="1"
        right="2"
        bottom="3"
        left="4"
      >
        foo
      </Container>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('position', 'absolute')
    expect(test).toHaveStyleRule('z-index', '1')
    expect(test).toHaveStyleRule('top', '1')
    expect(test).toHaveStyleRule('right', '2')
    expect(test).toHaveStyleRule('bottom', '3')
    expect(test).toHaveStyleRule('left', '4')
  })
})
