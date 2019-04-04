import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Page1 } from '../Page1'

describe('<Page1/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Page1 />)
  })
})
