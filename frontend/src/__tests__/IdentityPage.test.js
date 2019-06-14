import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { IdentityPage } from '../identityPage'

describe('<IdentityPage/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<IdentityPage />)
  })
})
