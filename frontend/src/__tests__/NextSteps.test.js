import React from 'react'
import { NextSteps } from '../p2/NextSteps'
import isReact from 'is-react'

describe('<NextSteps/>', () => {
  it('exports a React compatible component', () => {
    expect(isReact.compatible(<NextSteps />)).toEqual(true)
  })
})
