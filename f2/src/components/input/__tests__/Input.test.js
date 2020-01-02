import React from 'react'
import { ThemeProvider } from '@chakra-ui/core'
import canada from '../../../theme/canada'
import { Input } from '../'
import { cleanup } from '@testing-library/react'
import { mount } from 'enzyme'

describe('<Input />', () => {
  afterEach(cleanup)

  it('renders component in HTML as an input tag', () => {
    let wrapper = mount(
      <ThemeProvider theme={canada} >
        Test
        <Input />
      </ThemeProvider >,
    ).find('input')
    expect(wrapper.is('input')).toBeTruthy()
  })
})
