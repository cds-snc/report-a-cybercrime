import React from 'react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../../../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field } from 'formik'
import { CheckBox } from '../checkbox'
import { Radio } from '../radio'
import { TextArea } from '../textArea'
import { Input } from '../input'
import { FileUpload } from '../fileUpload'
import { DatePicker } from '../datePicker'
import { Error, Info, Warning, Success, ErrorSummary } from '../alert'
import { NextCancelButtons, SkipButton } from '../button'

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
