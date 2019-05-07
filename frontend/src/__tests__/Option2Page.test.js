import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Option2Page } from '../Option2Page'

describe('<Option2Page/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Option2Page />)
  })
})
