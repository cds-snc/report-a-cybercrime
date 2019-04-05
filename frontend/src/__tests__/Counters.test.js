import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Counters } from '../counters'

describe('<Th1P1/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Counters />)
  })

  it('displays the correct number of websites', () => {
    let { getByTestId } = render(<Counters websites={1111} />)
    expect(getByTestId('websites')).toHaveTextContent('1111')
  })

  it('displays the correct number of phone numbers', () => {
    let { getByTestId } = render(<Counters phoneNumbers={2222} />)
    expect(getByTestId('phoneNumbers')).toHaveTextContent('2222')
  })

  it('displays the correct number of websites', () => {
    let { getByTestId } = render(<Counters emailAddresses={3333} />)
    expect(getByTestId('emailAddresses')).toHaveTextContent('3333')
  })
})
