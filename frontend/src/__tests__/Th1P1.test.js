import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Th1P1 } from '../th1-p1'

describe('<Th1P1/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Th1P1 />)
  })
})
