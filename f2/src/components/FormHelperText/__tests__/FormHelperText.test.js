import React from 'react'
import { FormHelperText } from '../'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { render, cleanup } from '@testing-library/react'

describe('<FormHelperText />', () => {
  afterEach(cleanup)

  it('renders without crashing', () => {
    const FormArrayControl = document.createElement('FormArrayControl')
    ReactDOM.render(<FormHelperText />, FormArrayControl)
  })

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={canada}>
        <FormHelperText>foo</FormHelperText>
      </ThemeProvider>,
    )

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })
})
