import React from 'react'
import { cleanup } from '@testing-library/react'
import { FormLabel } from '../'
import ReactDOM from 'react-dom'
// import { mount } from 'enzyme'

afterEach(cleanup)
it('renders without crashing', () => {
  const FormArrayControl = document.createElement('FormArrayControl')
  ReactDOM.render(<FormLabel />, FormArrayControl)
})
