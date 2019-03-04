import React from 'react'
import GoCSignature from '../'
import { render, cleanup } from 'react-testing-library'

describe('<GoCSignature />', () => {
  afterEach(cleanup)

  it('renders svg', () => {
    const { getAllByRole } = render(<GoCSignature />)

    const test = getAllByRole('img')
    expect(test).toHaveLength(1)
  })

  it('accepts a width prop', () => {
    const { getByRole } = render(<GoCSignature width="1000%" />)

    const test = getByRole('img')
    expect(test.getAttribute('width')).toBe('1000%')
  })

  it('defaults to width of 10em', () => {
    const { getByRole } = render(<GoCSignature />)

    const test = getByRole('img')
    expect(test.getAttribute('width')).toBe('10em')
  })

  it('the color passed to the flag prop ends up in the generated stylesheet', () => {
    const { getByTestId } = render(<GoCSignature flag="papayawhip" />)

    const test = getByTestId('flag')
    expect(test).toHaveStyleRule('fill', 'papayawhip')
  })

  it('the flag defaults to #F00', () => {
    const { getByTestId } = render(<GoCSignature />)

    const test = getByTestId('flag')
    expect(test).toHaveStyleRule('fill', '#F00')
  })

  it('the text defaults to #000', () => {
    const { getByTestId } = render(<GoCSignature />)

    const test = getByTestId('text')
    expect(test).toHaveStyleRule('fill', '#000')
  })

  it('the color passed to the text prop ends up in the generated stylesheet', () => {
    const { getByTestId } = render(<GoCSignature text="mistyrose" />)

    const test = getByTestId('text')
    expect(test).toHaveStyleRule('fill', 'mistyrose')
  })

  it('outputs english text first by default', () => {
    const { getByTestId } = render(<GoCSignature />)

    const test = getByTestId('text')
    expect(test.getAttribute('transform')).toBe('translate(0 0)')
  })

  it("outputs french text first when passed lang='fr'", () => {
    const { getByTestId } = render(<GoCSignature lang="fr" />)

    const test = getByTestId('text')
    expect(test.getAttribute('transform')).toBe('translate(317 0)')
  })

  it('allows passing through abritrary props', () => {
    const { getByRole } = render(
      <GoCSignature focusable="false" whizz="bang" />,
    )

    const test = getByRole('img')
    expect(test.getAttribute('focusable')).toBe('false')
    expect(test.getAttribute('whizz')).toBe('bang')
  })
})
