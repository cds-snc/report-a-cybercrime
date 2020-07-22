import React from 'react'
import { FormLabel } from '../'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { render, cleanup } from '@testing-library/react'

describe('<FormLabel />', () => {
  afterEach(cleanup)

  it('renders without crashing', () => {
    const FormArrayControl = document.createElement('FormArrayControl')
    ReactDOM.render(<FormLabel />, FormArrayControl)
  })

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={canada}>
        <FormLabel>foo</FormLabel>
      </ThemeProvider>,
    )

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })
})
