import React from 'react'
import { cleanup } from '@testing-library/react'
import { FormHelperText } from '../'
import ReactDOM from 'react-dom'

afterEach(cleanup)

it('renders without crashing', () => {
  const FormArrayControl = document.createElement('FormArrayControl')
  ReactDOM.render(<FormHelperText />, FormArrayControl)
})
