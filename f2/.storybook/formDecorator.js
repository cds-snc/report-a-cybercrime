import React from 'react'
import { Form } from 'react-final-form'

const validate = () => {
  const errors = { email: 'contactinfoForm.email.warning' }
  return errors
}

const FormDecorator = storyFn => (
  <Form
    initialValues={''}
    onSubmit={values => {
      props.onSubmit(values)
    }}
    validate={validate}
    render={values => storyFn()}
  />
)

export default FormDecorator
