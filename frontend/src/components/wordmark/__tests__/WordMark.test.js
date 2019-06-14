import React from 'react'
import { render, cleanup } from '@testing-library/react'
import WordMark from '../'

describe('<WordMark />', () => {
  afterEach(cleanup)

  it('renders svg', () => {
    const { getAllByRole } = render(<WordMark />)

    const test = getAllByRole('img')
    expect(test).toHaveLength(1)
  })

  it('sets the correct aria-label in English', () => {
    const { getByRole } = render(<WordMark lang="en" />)

    const test = getByRole('img')
    expect(test.getAttribute('aria-label')).toBe(
      'Symbol of the Government of Canada',
    )
  })

  it('sets the correct aria-label in French', () => {
    const { getByRole } = render(<WordMark lang="fr" />)

    const test = getByRole('img')
    expect(test.getAttribute('aria-label')).toBe(
      'Symbole du gouvernement du Canada',
    )
  })

  it('accepts a width prop', () => {
    const { getByRole } = render(<WordMark width="1000%" />)

    const test = getByRole('img')
    expect(test.getAttribute('width')).toBe('1000%')
  })

  it('defaults to width of 10em', () => {
    const { getByRole } = render(<WordMark />)

    const test = getByRole('img')
    expect(test.getAttribute('width')).toBe('10em')
  })

  it('allows the flag colour to be set', () => {
    const { getByTestId } = render(<WordMark flag="#fff" />)

    const test = getByTestId('flag')
    expect(test).toHaveStyleRule('fill', '#fff')
  })

  it('defaults flag colour to #F00', () => {
    const { getByTestId } = render(<WordMark />)

    const test = getByTestId('flag')
    expect(test).toHaveStyleRule('fill', '#F00')
  })

  it('allows the text colour to be set', () => {
    const { getByTestId } = render(<WordMark text="#ddd" />)

    const test = getByTestId('text')
    expect(test).toHaveStyleRule('fill', '#ddd')
  })

  it('defaults text colour to #000', () => {
    const { getByTestId } = render(<WordMark />)

    const test = getByTestId('text')
    expect(test).toHaveStyleRule('fill', '#000')
  })

  it('allows passing through abritrary props', () => {
    const { getByRole } = render(<WordMark focusable="false" whizz="bang" />)

    const test = getByRole('img')
    expect(test.getAttribute('focusable')).toBe('false')
    expect(test.getAttribute('whizz')).toBe('bang')
  })
})
