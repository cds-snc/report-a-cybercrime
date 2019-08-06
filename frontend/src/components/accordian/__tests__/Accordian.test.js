import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Accordion } from '..'

describe('<Accordion />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <Accordion label="test label">
        <div>test contents</div>
      </Accordion>,
    )
  })
})
