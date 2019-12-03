import React from 'react'
import { Footer } from '../'
import canada from '../../../theme/canada'
import { render, cleanup } from '@testing-library/react'

describe('<Footer />', () => {
  afterEach(cleanup)

  it('renders children correctly', () => {
    const { getAllByText } = render(
      <Footer>
        <div>foo</div>
      </Footer>,
    )

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })
})
