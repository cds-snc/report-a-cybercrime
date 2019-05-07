import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { AmountOfInfoPage } from '../amountOfInfoPage'

describe('<AmountOfInfoPage/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<AmountOfInfoPage />)
  })
})
