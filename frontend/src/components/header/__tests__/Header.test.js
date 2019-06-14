import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { render, cleanup } from '@testing-library/react'
import { mount } from 'enzyme'
import { Header, H1, H2, H3, H4, H5, H6 } from '../'

describe('<Header />', () => {
  afterEach(cleanup)

  it('Properly render child components', () => {
    const { getAllByText } = render(<Header as="h1">foo</Header>)

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })

  it('Properly handles font size props', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ fontSizes: ['14px'] }}>
        <Header fontSize={0} as="h1">
          foo
        </Header>
      </ThemeProvider>,
    )

    const test = getByText('foo')
    expect(test).toHaveStyleRule('font-size', '14px')
  })

  it('Properly handles line height props', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ lineHeights: ['1'] }}>
        <Header lineHeight={0} as="h1">
          foo
        </Header>
      </ThemeProvider>,
    )

    const test = getByText('foo')
    expect(test).toHaveStyleRule('line-height', '1')
  })

  it('Properly handles space props', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ space: ['5px', '10px'] }}>
        <Header p={0} ml={1} as="h1">
          foo
        </Header>
      </ThemeProvider>,
    )

    const test = getByText('foo')
    expect(test).toHaveStyleRule('padding', '5px')
    expect(test).toHaveStyleRule('margin-left', '10px')
  })

  it('Properly handles color props', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <Header color="blue" as="h1">
          foo
        </Header>
      </ThemeProvider>,
    )

    const test = getByText('foo')
    expect(test).toHaveStyleRule('color', '#005ea5')
  })

  it('Properly handles font weight', () => {
    const { getByText } = render(
      <Header fontWeight="bold" as="h1">
        foo
      </Header>,
    )

    const test = getByText('foo')
    expect(test).toHaveStyleRule('font-weight', 'bold')
  })

  it("The 'is' prop sets correct header tag", () => {
    let wrapper = mount(<Header as="h1" />).find('h1')
    expect(wrapper.is('h1')).toBeTruthy()
  })

  it('H1 preset renders as h1', () => {
    let wrapper = mount(<H1 />).find('h1')
    expect(wrapper.is('h1')).toBeTruthy()
  })

  it('H2 preset renders as h2', () => {
    let wrapper = mount(<H2 />).find('h2')
    expect(wrapper.is('h2')).toBeTruthy()
  })

  it('H3 preset renders as h3', () => {
    let wrapper = mount(<H3 />).find('h3')
    expect(wrapper.is('h3')).toBeTruthy()
  })

  it('H4 preset renders as h4', () => {
    let wrapper = mount(<H4 />).find('h4')
    expect(wrapper.is('h4')).toBeTruthy()
  })

  it('H5 preset renders as h5', () => {
    let wrapper = mount(<H5 />).find('h5')
    expect(wrapper.is('h5')).toBeTruthy()
  })

  it('H6 preset renders as h6', () => {
    let wrapper = mount(<H6 />).find('h6')
    expect(wrapper.is('h6')).toBeTruthy()
  })
})
