import React from 'react'
import { Form } from 'react-final-form'

const FormDecorator = storyFn => (
  <Form
    initialValues={''}
    onSubmit={values => {
      props.onSubmit(values)
    }}
    validate={''}
    render={values => storyFn()}
  />
)

export default FormDecorator
