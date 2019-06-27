import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { DateSelector } from '..'

describe('<DateSelector />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<DateSelector value="" onChange={jest.fn()} />)
  })
})
