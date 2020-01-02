import React from 'react'
import { TextInput } from '../'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from '@chakra-ui/core'
import canada from '../../../theme/canada'

describe('<TextInput/>', () => {
  afterEach(cleanup)

  it('renders an input of type text', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={canada} >
        <label htmlFor="foo">
          foo
          <TextInput id="foo" />
        </label>
      </ThemeProvider >,
    )

    const input = getByLabelText('foo')
    expect(input.type).toEqual('text')
  })
})
