import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Feature1Page1 } from '../Feature1Page1'

describe('<Feature1Page1/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Feature1Page1 />)
  })
})
