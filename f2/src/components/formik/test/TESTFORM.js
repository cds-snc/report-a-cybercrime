import React from 'react'
import { useStateValue } from '../../../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import { Error, Info, Warning, Success, ErrorSummary } from '../alert'

export const TestForm = (props) => {
  const [data] = useStateValue()

  const errorSummary = {}

  errorSummary['errorField'] = {
    label: 'Error Label',
    message: 'Error Message',
  }

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
            <ErrorSummary
              errors={errorSummary}
              submissions={0}
              title="Error Summary"
            />
            <Container>
              <Row>
                <Info>Info</Info>
                <Error>Error</Error>
                <Warning>Warning</Warning>
                <Success>Success</Success>
              </Row>
            </Container>
          </Form>
        )}
      />
    </React.Fragment>
  )
}
