import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { Well } from '../components/Messages'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { getHowDidItStartSchema } from '../utils/formik/validationSchema'
import { CheckBox } from '../components/formik/checkbox'
import { TextArea } from '../components/formik/textArea'
import { Error } from '../components/formik/error'
import { NextCancelButtons } from '../components/formik/button'

export const TestForm = (props) => {
  const [data] = useStateValue()

  return (
    <React.Fragment>
      <Formik
        initialValues={{ howDidTheyReachYou: [] }}
        validate={(values) => {
          console.log(values)
        }}
        /*validationSchema={getHowDidItStartSchema()}*/
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
        render={({ values, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
                <Row className="form-label">
                  <Trans id="howDidTheyReachYou.question" />
                </Row>
                <Row className="form-helper-text">
                  <Trans id="howDidTheyReachYou.reminder" />
                </Row>
                <ErrorMessage
                  name="howDidTheyReachYou"
                  component={Error}
                  msg={<Trans id="howDidTheyReachYou.error" />}
                />
              </Row>
              <Row className="form-section">
                <Field
                  name="howDidTheyReachYou"
                  label="Question Label"
                  component={CheckBox}
                  value="Test Check"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.howDidTheyReachYou.includes('Test Check')}
                  id="test-check"
                >
                  <Field
                    name="Test Text"
                    label="Text Area"
                    helpText="This should help"
                    component={TextArea}
                  />
                </Field>
              </Row>
              <Row className="checkbox-row">
                <Form.Check
                  custom
                  type="checkbox"
                  id="custom-id"
                  label="Test Check Label"
                />
              </Row>
            </Container>
          </Form>
        )}
      />
    </React.Fragment>
  )
}
