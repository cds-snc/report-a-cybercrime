import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { HowToTellPolice } from '../HowToTellPolice'

describe('HowToTellPolice/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<HowToTellPolice />)
  })
})
