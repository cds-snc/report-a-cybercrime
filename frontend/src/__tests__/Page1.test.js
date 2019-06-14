import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Page1 } from '../Page1'

describe('<Page1/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Page1 />)
  })
})
