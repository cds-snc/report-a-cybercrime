import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { HowToTellPolice } from '../HowToTellPolice'

describe('HowToTellPolice/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<HowToTellPolice />)
  })
})
