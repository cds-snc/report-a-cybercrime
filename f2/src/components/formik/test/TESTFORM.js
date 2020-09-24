import React from 'react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../../../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import {
  DefaultButton,
  SubmitButton,
  CancelButton,
  UploadButton,
  SkipButton,
  FeedbackButton,
  NextCancelButtons,
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
              <DefaultButton label="Test Button" />
              <SubmitButton label="Submit" />
              <FeedbackButton label="Feedback" />
              <CancelButton label="Cancel" />
              <UploadButton label="Upload" />
              <SkipButton label="Skip" />
              <Row>
                <NextCancelButtons
                  label="Next Page: Test"
                  submit="Continue"
                  cancel="Cancel"
                />
              </Row>
            </Container>
          </Form>
        )}
      />
    </React.Fragment>
  )
}
