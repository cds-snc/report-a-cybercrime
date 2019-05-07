import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Option3Page } from '../Option3Page'

describe('<Option3Page/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Option3Page />)
  })
})
