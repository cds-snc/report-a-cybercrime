import React from 'react'
import { NextSteps } from '../p2/NextSteps'
import { render } from '@testing-library/react'

describe('<NextSteps/>', () => {
  it('explains what happens next', () => {
    let { getByText } = render(<NextSteps />)
    expect(getByText(/next steps/i)).toBeTruthy()
  })
})
