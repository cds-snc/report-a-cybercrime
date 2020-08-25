import React from 'react'
import { Trans } from '@lingui/macro'
import PropTypes from 'prop-types'
import { Alert } from '../components/Messages'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { Error } from '../components/formik/alert'
import { Form, Container, Row } from 'react-bootstrap'
import { Radio } from '../components/formik/radio'
import { TextArea } from '../components/formik/textArea'
import { FeedbackButton } from '../components/formik/button'
import { FinalFeedbackFormSchema } from './FinalFeedbackFormSchema'

const validate = () => {
  return {}
}

export const FinalFeedbackForm = (props) => {
  const formOptions = [
    {
      name: 'veryHard',
      radioLabel: <Trans id="finalFeedback.wasServiceHard.veryHard" />,
      radioValue: 'finalFeedback.wasServiceHard.veryHard',
    },
    {
      name: 'hard',
      radioLabel: <Trans id="finalFeedback.wasServiceHard.hard" />,
      radioValue: 'finalFeedback.wasServiceHard.hard',
    },
    {
      name: 'neutral',
      radioLabel: <Trans id="finalFeedback.wasServiceHard.neutral" />,
      radioValue: 'finalFeedback.wasServiceHard.neutral',
    },
    {
      name: 'easy',
      radioLabel: <Trans id="finalFeedback.wasServiceHard.easy" />,
      radioValue: 'finalFeedback.wasServiceHard.easy',
    },
    {
      name: 'veryEasy',
      radioLabel: <Trans id="finalFeedback.wasServiceHard.veryEasy" />,
      radioValue: 'finalFeedback.wasServiceHard.veryEasy',
    },
  ]

  let showWarning = false

  return (
    <Formik
      initialValues={{
        wasServiceHard: '',
        howCanWeDoBetter: '',
      }}
      //validationSchema={FinalFeedbackFormSchema()}
      onSubmit={(values) => {
        if (
          values.wasServiceHard.length === 0 &&
          values.howCanWeDoBetter.length === 0
        ) {
          showWarning = true
        } else {
          props.onSubmit(values)
        }
      }}
      //validate={validate}
    >
      {({ handleSubmit, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <Container>
            {showWarning ? (
              <Alert status="error">
                <Trans id="finalFeedback.warning" />
              </Alert>
            ) : null}
            <Row className="form-question">
              <Row className="form-label">
                <Trans id="finalFeedback.wasServiceHard.label" />
              </Row>
            </Row>
            <Row className="form-section">
              <FieldArray
                name="wasServiceHard"
                className="form-section"
                render={() =>
                  formOptions.map((question) => {
                    return (
                      <React.Fragment key={question.name}>
                        <Field
                          name="wasServiceHard"
                          label={question.radioLabel}
                          component={Radio}
                          value={question.radioValue}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="radio"
                          id={'radio-' + question.name}
                        />
                      </React.Fragment>
                    )
                  })
                }
              />
            </Row>
            <Row className="form-section">
                <Field
                  name="howCanWeDoBetter"
                  label={<Trans id="finalFeedback.howCanWeDoBetter.label" />}
                  helpText={<Trans id="finalFeedback.howCanWeDoBetter.helper" />}
                  component={TextArea}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  id="textarea-whatHappened"
                />
            </Row>
            <Row>
              <FeedbackButton
                label={<Trans id="finalFeedback.submit" />}
              />
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  )
}

FinalFeedbackForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
