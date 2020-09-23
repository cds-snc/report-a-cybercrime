import React from 'react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../../../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import {
  TestSubmitButton,
  TestCancelButton,
  TestUploadButton,
  TestSkipButton,
  TestButton,
} from '../button'

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
              <TestSubmitButton label="Test Button" />
              <TestCancelButton label="Cancel" />
              <TestUploadButton label="Upload" />
              <TestSkipButton label="Skip" />
              <TestButton label="Test" />
            </Container>
          </Form>
        )}
      />
    </React.Fragment>
  )
}
