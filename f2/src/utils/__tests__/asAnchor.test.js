import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { mount } from 'enzyme'
import { asAnchor } from '../asAnchor'

describe('asAnchor higher order component', () => {
  afterEach(cleanup)

  const BaseLink = asAnchor('a')
  const BaseButton = asAnchor('button')

  it('Uses tag passed to HoC to set AnchorType rendered', () => {
    let wrapperLink = mount(<BaseLink />).find('a')
    expect(wrapperLink.is('a')).toBeTruthy()

    let wrapperButton = mount(<BaseButton />).find('button')
    expect(wrapperButton.is('button')).toBeTruthy()
  })

  it('Uses the typography props to properly set font weight, font size and line height in CSS', () => {
    const { getByText } = render(
      <ThemeProvider
        theme={{ fontSizes: ['14px'], lineHeights: ['0', '1.35'] }}
      >
        <BaseLink fontSize={0} fontWeight="400" lineHeight={1}>
          foo
        </BaseLink>
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
        <BaseLink m="auto" ml={1} p={0} px={1}>
          foo
        </BaseLink>
      </ThemeProvider>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('margin', 'auto')
    expect(test).toHaveStyleRule('margin-left', '5px')
    expect(test).toHaveStyleRule('padding', '0px')
    expect(test).toHaveStyleRule('padding-left', '5px')
    expect(test).toHaveStyleRule('padding-right', '5px')
  })

  it('uses the layout props to set display type in CSS', () => {
    const { getByText } = render(<BaseLink display="block">foo</BaseLink>)

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('display', 'block')
  })

  it('uses the color styles prop to set link color in CSS', () => {
    const colorStyles = {
      link: {
        color: '#005ea5',
      },
    }
    const { getByText } = render(
      <ThemeProvider theme={{ colorStyles: colorStyles }}>
        <BaseLink colors="link">foo</BaseLink>
      </ThemeProvider>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('color', '#005ea5')
  })
})
