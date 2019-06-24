import React from 'react'
import { render } from '@testing-library/react'
import { Breadcrumb } from '../components/breadcrumb'

describe('Breadcrumb', () => {
  it('renders without crashing - two children', () => {
    render(
      <Breadcrumb>
        <span>crumb1</span>
        <span>crumb2</span>
      </Breadcrumb>,
    )
  })
  it('renders without crashing - one child', () => {
    render(
      <Breadcrumb>
        <span>crumb1</span>
      </Breadcrumb>,
    )
  })
})
