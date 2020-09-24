import React from 'react'
import { Formik } from 'formik'

const validate = () => {
  const errors = { email: 'contactinfoForm.email.warning' }
  return errors
}

const FormikDecorator = (storyFn) => (
  <Formik
    initialValues={{ testDay: '' }}
    onSubmit={(values) => {
      props.onSubmit(values)
    }}
    validate={validate}
  >
    {({ values }) => storyFn()}
  </Formik>
)

export default FormikDecorator
