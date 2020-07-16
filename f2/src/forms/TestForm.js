/*import React from 'react'
import { useFormik } from 'formik'

export const SignUp = () => {
  const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    }

    if (!values.lastName) {
      errors.lastName = 'Required'
    }

    return errors
  }

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstName: "Test",
      lastName: ""
    },
    validate,
    onSubmit(values) {
      console.log(values)
    },
  })

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" onChange={handleChange} value={values.firstName}/>
      {errors.firstName ? errors.firstName : null}
      <input name="lastName" onChange={handleChange} value={values.lastName}/>
      {errors.lastName ? errors.lastName : null}
      <button type="submit">Submit</button>
    </form>
  )
}*/

import React from 'react'
import BasicForm from '../components/TestForm'

export const SignUp = (props) => {
  return <BasicForm />
}
