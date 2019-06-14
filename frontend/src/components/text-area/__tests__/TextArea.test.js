import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { TextArea } from '../'
import { render, cleanup } from '@testing-library/react'
import { mount } from 'enzyme'

describe('<TextArea />', () => {
  afterEach(cleanup)

  it('properly renders as a textarea tag', () => {
    let wrapper = mount(
      <form>
        <label>
          Test
          <TextArea />
        </label>
      </form>,
    ).find('textarea')
    expect(wrapper.is('textarea')).toBeTruthy()
  })

  it('sets font properties from props', () => {
    const { getByLabelText } = render(
      <form>
        <label htmlFor="test">Test</label>{' '}
        <TextArea
          id="test"
          fontSize="30px"
          fontWeight={200}
          lineHeight="20pt"
        />{' '}
      </form>,
    )
    const test = getByLabelText(/Test/)
    expect(test).toHaveStyleRule('font-size', '30px')
    expect(test).toHaveStyleRule('font-weight', '200')
    expect(test).toHaveStyleRule('line-height', '20pt')
  })

  it('sets height and width from props', () => {
    const { getByLabelText } = render(
      <form>
        <label htmlFor="test">Test</label>{' '}
        <TextArea id="test" height={300} width="2rem" />{' '}
      </form>,
    )
    const test = getByLabelText(/Test/)
    expect(test).toHaveStyleRule('height', '300px')
    expect(test).toHaveStyleRule('width', '2rem')
  })

  it('sets margins and padding from props', () => {
    const SPACING = ['0px', '5px']
    const { getByLabelText } = render(
      <ThemeProvider theme={{ space: SPACING }}>
        <form>
          <label htmlFor="test">Test</label>{' '}
          <TextArea id="test" m="auto" ml={1} p={0} px={1} />{' '}
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

  it('sets display from props', () => {
    const { getByLabelText } = render(
      <form>
        <label htmlFor="test">Test</label>{' '}
        <TextArea id="test" display="inline-block" />{' '}
      </form>,
    )
    const test = getByLabelText(/Test/)
    expect(test).toHaveStyleRule('display', 'inline-block')
  })
})
