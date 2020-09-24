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
  MidFormFeedbackButton,
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
              <Row>
                <DefaultButton label="Test Button" />
                <SubmitButton label="Submit" />
                <FeedbackButton label="Feedback" />
                <CancelButton label="Cancel" />
                <UploadButton label="Upload" />
                <SkipButton label="Skip" />
              </Row>
              <Row>
                <NextCancelButtons
                  label="Next Page: Test"
                  submit="Continue"
                  cancel="Cancel"
                />
              </Row>
              <Row>
                <MidFormFeedbackButton label="Is something wrong on this page?" />
              </Row>
            </Container>
          </Form>
        )}
      />
    </React.Fragment>
  )
}
