import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Input } from '../'
import { render, cleanup } from 'react-testing-library'
import { mount } from 'enzyme'

describe('<Input />', () => {
  afterEach(cleanup)

  it('properly renders as an input tag', () => {
    let wrapper = mount(
      <form>
        <label>Test</label> <Input />
      </form>,
    ).find('input')
    expect(wrapper.is('input')).toBeTruthy()
  })

  it('properly handles dimension props', () => {
    const { getByLabelText } = render(
      <form>
        <label id="test">Test</label>{' '}
        <Input aria-labelledby="test" height={300} width="2rem" />{' '}
      </form>,
    )

    const test = getByLabelText(/Test/)
    expect(test).toHaveStyleRule('height', '300px')
    expect(test).toHaveStyleRule('width', '2rem')
  })

  it('properly handles space props', () => {
    const SPACING = ['0px', '5px']
    const { getByLabelText } = render(
      <ThemeProvider theme={{ space: SPACING }}>
        <form>
          <label id="test">Test</label>{' '}
          <Input aria-labelledby="test" m="auto" ml={1} p={0} px={1} />{' '}
        </form>
      </ThemeProvider>,
    )

    const test = getByLabelText(/Test/)
    expect(test).toHaveStyleRule('margin', 'auto')
    expect(test).toHaveStyleRule('margin-left', '5px')
    expect(test).toHaveStyleRule('padding', '0px')
    expect(test).toHaveStyleRule('padding-left', '5px')
    expect(test).toHaveStyleRule('padding-right', '5px')
  })

  it('properly handles border props', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <form>
          <label id="test">Test</label>{' '}
          <Input aria-labelledby="test" border="1px solid" borderColor="blue" />{' '}
        </form>
      </ThemeProvider>,
    )

    const test = getByLabelText(/Test/)
    expect(test).toHaveStyleRule('border', '1px solid')
    expect(test).toHaveStyleRule('border-color', '#005ea5')
  })

  it('properly handles layout props', () => {
    const { getByLabelText } = render(
      <form>
        <label id="test">Test</label>{' '}
        <Input aria-labelledby="test" display="inline-block" />{' '}
      </form>,
    )

    const test = getByLabelText(/Test/)
    expect(test).toHaveStyleRule('display', 'inline-block')
  })

  it('properly handles position props', () => {
    const { getByLabelText } = render(
      <form>
        <label id="test">Test</label>{' '}
        <Input
          aria-labelledby="test"
          position="absolute"
          zIndex="1"
          top="1"
          right="2"
          bottom="3"
          left="4"
        />{' '}
      </form>,
    )

    const test = getByLabelText(/Test/)
    expect(test).toHaveStyleRule('position', 'absolute')
    expect(test).toHaveStyleRule('zIndex', '1')
    expect(test).toHaveStyleRule('top', '1')
    expect(test).toHaveStyleRule('right', '2')
    expect(test).toHaveStyleRule('bottom', '3')
    expect(test).toHaveStyleRule('left', '4')
  })
})
