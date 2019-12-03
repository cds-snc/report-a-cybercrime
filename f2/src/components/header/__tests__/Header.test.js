import React from 'react'
import { cleanup } from '@testing-library/react'
import { mount } from 'enzyme'
import { H1, H2, H3, H4, H5, H6 } from '../'

describe('<Header />', () => {
  afterEach(cleanup)

  //Importing this component from Chakra, we assume it has passed some tests already
  //We are testing our presets

  it('H1 preset renders as h1', () => {
    let wrapper = mount(<H1 />).find('h1')
    expect(wrapper.is('h1')).toBeTruthy()
  })

  it('H2 preset renders as h2', () => {
    let wrapper = mount(<H2 />).find('h2')
    expect(wrapper.is('h2')).toBeTruthy()
  })

  it('H3 preset renders as h3', () => {
    let wrapper = mount(<H3 />).find('h3')
    expect(wrapper.is('h3')).toBeTruthy()
  })

  it('H4 preset renders as h4', () => {
    let wrapper = mount(<H4 />).find('h4')
    expect(wrapper.is('h4')).toBeTruthy()
  })

  it('H5 preset renders as h5', () => {
    let wrapper = mount(<H5 />).find('h5')
    expect(wrapper.is('h5')).toBeTruthy()
  })

  it('H6 preset renders as h6', () => {
    let wrapper = mount(<H6 />).find('h6')
    expect(wrapper.is('h6')).toBeTruthy()
  })
})
