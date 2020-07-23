import React from 'react'
import { FormErrorMessage } from '../'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'

describe('<FormErrorMessage />', () => {
  afterEach(cleanup)

  it('renders without crashing', () => {
    const FormArrayControl = document.createElement('FormArrayControl')
    ReactDOM.render(<FormErrorMessage />, FormArrayControl)
  })
  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={canada}>
        <FormErrorMessage>foo</FormErrorMessage>
      </ThemeProvider>,
    )
    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })
})
