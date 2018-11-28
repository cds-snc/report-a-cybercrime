import React from 'react'
import { mount } from 'enzyme'
import { H1, H3, H4 } from '../utils/headers'

describe('H1', () => {
  it('renders', () => {
    mount(<H1> header </H1>)
  })
})

describe('H3', () => {
  it('renders', () => {
    mount(<H3> header </H3>)
  })
})

describe('H4', () => {
  it('renders', () => {
    mount(<H4> header </H4>)
  })
})
