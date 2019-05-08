import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { IdentityPage } from '../identityPage'

describe('<IdentityPage/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<IdentityPage />)
  })
})
