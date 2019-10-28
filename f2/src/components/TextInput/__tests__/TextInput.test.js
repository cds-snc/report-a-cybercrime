import React from 'react'
import { TextInput } from '../'
import { render, cleanup } from '@testing-library/react'

describe('<TextInput/>', () => {
  afterEach(cleanup)

  it('renders an input of type text', () => {
    const { getByLabelText } = render(
      <label htmlFor="foo">
        foo
        <TextInput id="foo" />
      </label>,
    )

    const input = getByLabelText('foo')
    expect(input.type).toEqual('text')
  })
})
