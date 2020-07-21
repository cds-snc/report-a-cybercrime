import React from 'react'
import { cleanup } from '@testing-library/react'
import { FormErrorMessage } from '../'
import ReactDOM from 'react-dom'

describe('<FormErrorMessage />', () => {
  afterEach(cleanup)

  it('renders without crashing', () => {
    const FormArrayControl = document.createElement('FormArrayControl')
    ReactDOM.render(<FormErrorMessage />, FormArrayControl)
  })
})
