import React from 'react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../../../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import { TestButton, SubmitButton } from '../button'

export const TestForm = (props) => {
  const [data] = useStateValue()

  return (
    <React.Fragment>
      <Formik
        initialValues={data.formData}
        validate={(values) => {
          console.log(values)
        }}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
        render={({ values, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <TestButton type="submit" label="Test Button" />
              <SubmitButton label="Submit Button" />
            </Container>
          </Form>
        )}
      />
    </React.Fragment>
  )
}
