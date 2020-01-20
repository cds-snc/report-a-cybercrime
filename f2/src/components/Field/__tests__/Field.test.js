import React from 'react'
import { Field } from '../'
import { render, cleanup } from '@testing-library/react'
import { Form } from 'react-final-form'

describe('<Field/>', () => {
  afterEach(cleanup)

  it('renders and has matching htmlFor/id/name', () => {
    const submitMock = jest.fn()
    const { getByLabelText, getByText } = render(
      <Form
        onSubmit={submitMock}
        render={({ handleSubmit }) => (
          <Field id="test" label="foo" helpText="help" />
        )}
      />,
    )

    const input = getByLabelText('foo')
    const label = getByText('foo')

    //Make sure all 3 of these are matching
    expect(input.id).toEqual('test')
    expect(input.name).toEqual('test')
    expect(label.htmlFor).toEqual('test')
  })
})
