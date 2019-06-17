import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { UniqueID } from '../'

describe('<UniqueID />', () => {
  afterEach(cleanup)
  it('calls a child function with a stable id unique to that instance', () => {
    let mock = jest.fn()
    render(
      <UniqueID>
        {id => {
          mock(id)
          return null
        }}
      </UniqueID>,
    )

    expect(mock).toHaveBeenCalledWith('id-0')
  })
})
