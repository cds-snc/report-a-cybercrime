import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Option1Page } from '../Option1Page'

describe('<Option1Page/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Option1Page />)
  })
})
