import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { render, cleanup } from '@testing-library/react'
import { Field } from '../'
import { Form } from 'react-final-form'

describe('<Field />', () => {
  afterEach(cleanup)

  it('renders', () => {
    const submitMock = jest.fn()

    render(
      <ThemeProvider theme={canada}>
        <Form
          initialValues=""
          onSubmit={submitMock}
          render={() => <Field name="name" label="foo" helperText="help" />}
        />
      </ThemeProvider>,
    )
  })
})
