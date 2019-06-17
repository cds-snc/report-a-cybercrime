import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { AmountOfInfoPage } from '../amountOfInfoPage'

describe('<AmountOfInfoPage/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<AmountOfInfoPage />)
  })
})
