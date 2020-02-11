import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { render, cleanup } from '@testing-library/react'
import { FormArrayControl } from '../'
import { Form } from 'react-final-form'

describe('<FormArrayControl />', () => {
  afterEach(cleanup)

  it('renders children', () => {
    const submitMock = jest.fn()

    const { getAllByText } = render(
      <ThemeProvider theme={canada}>
        <Form
          initialValues=""
          onSubmit={submitMock}
          render={() => (
            <FormArrayControl name="foo" label="bar" helperText="help">
              <p>all</p>
            </FormArrayControl>
          )}
        />
      </ThemeProvider>,
    )

    const label = getAllByText(/bar/)
    const help = getAllByText(/help/)
    const test = getAllByText(/all/)

    expect(label).toHaveLength(1)
    expect(help).toHaveLength(1)
    expect(test).toHaveLength(1)
  })
})
