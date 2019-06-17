import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Label } from '../'
import { render, cleanup } from '@testing-library/react'
import { mount } from 'enzyme'

describe('<Label />', () => {
  afterEach(cleanup)

  it('renders component in HTML as a label tag', () => {
    let wrapper = mount(<Label>Test</Label>).find('label')
    expect(wrapper.is('label')).toBeTruthy()
  })

  it('properly renders children', () => {
    const { getAllByText } = render(<Label>foo</Label>)

    const test = getAllByText('foo')
    expect(test).toHaveLength(1)
  })

  it('uses the typography props to properly set font weight, font size and line height in CSS', () => {
    const { getByText } = render(
      <ThemeProvider
        theme={{ fontSizes: ['14px'], lineHeights: ['0', '1.35'] }}
      >
        <Label fontSize={0} fontWeight="400" lineHeight={1}>
          foo
        </Label>
      </ThemeProvider>,
    )

    const test = getByText('foo')
    expect(test).toHaveStyleRule('font-size', '14px')
    expect(test).toHaveStyleRule('font-weight', '400')
    expect(test).toHaveStyleRule('line-height', '1.35')
  })

  it('uses the space props to set padding and margins in CSS', () => {
    const SPACING = ['0px', '5px']
    const { getByText } = render(
      <ThemeProvider theme={{ space: SPACING }}>
        <Label m="auto" ml={1} p={0} px={1}>
          foo
        </Label>
      </ThemeProvider>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('margin', 'auto')
    expect(test).toHaveStyleRule('margin-left', '5px')
    expect(test).toHaveStyleRule('padding', '0px')
    expect(test).toHaveStyleRule('padding-left', '5px')
    expect(test).toHaveStyleRule('padding-right', '5px')
  })

  it('uses the color props to set the font color and background color in CSS', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5', red: '#FF0000' } }}>
        <Label color="blue" bg="red">
          foo
        </Label>
      </ThemeProvider>,
    )

    const test = getByText('foo')
    expect(test).toHaveStyleRule('color', '#005ea5')
    expect(test).toHaveStyleRule('background-color', '#FF0000')
  })

  it('uses the layout props to set display type in CSS', () => {
    const { getByText } = render(<Label display="block">foo</Label>)

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('display', 'block')
  })

  it('uses the border props to set border style, size and color in CSS', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <Label border="3px dotted" borderColor="blue">
          foo
        </Label>
      </ThemeProvider>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('border', '3px dotted')
    expect(test).toHaveStyleRule('border-color', '#005ea5')
  })

  it('uses the dimension props to set height and width in CSS', () => {
    const { getByText } = render(
      <Label height={300} width="2rem">
        foo
      </Label>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('height', '300px')
    expect(test).toHaveStyleRule('width', '2rem')
  })

  it('uses the position props to set type of positioning and positioning values in CSS', () => {
    const { getByText } = render(
      <Label
        position="absolute"
        zIndex="1"
        top="1"
        right="2"
        bottom="3"
        left="4"
      >
        foo
      </Label>,
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
