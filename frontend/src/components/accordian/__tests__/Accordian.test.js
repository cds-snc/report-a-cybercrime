import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Accordion } from '..'

describe('<Accordion />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <Accordion>
        <div label="test label">test contents</div>
      </Accordion>,
    )
  })
})
