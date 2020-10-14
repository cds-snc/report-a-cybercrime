/** @jsx jsx */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { H1, H2 } from '../components/formik/header'
import {
  FeedbackButton,
  MidFormFeedbackButton,
} from '../components/formik/button'
import { useLocation } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { TextArea } from '../components/formik/textArea'
import { Box } from '../components/formik/box'
import { Error, Info } from '../components/formik/alert'

export const MidFeedbackForm = (props) => {
  const [isSubmit, setIsSubmit] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const midFeedback = [
    {
      name: 'confuseProblem',
      checkboxLabel: <Trans id="midFeedback.problem.confusing" />,
      checkboxValue: 'midFeedback.problem.confusing',
    },
    {
      name: 'brokenProblem',
      checkboxLabel: <Trans id="midFeedback.problem.broken" />,
      checkboxValue: 'midFeedback.problem.broken',
    },
    {
      name: 'adaptiveProblem',
      checkboxLabel: <Trans id="midFeedback.problem.adaptive" />,
      checkboxValue: 'midFeedback.problem.adaptive',
    },
    {
      name: 'worryProblem',
      checkboxLabel: <Trans id="midFeedback.problem.worry" />,
      checkboxValue: 'midFeedback.problem.worry',
    },
    {
      name: 'otherProblem',
      checkboxLabel: <Trans id="midFeedback.problem.other" />,
      checkboxValue: 'midFeedback.problem.other',
    },
  ]

  return (
    <React.Fragment>
      {isSubmit ? (
        <Info>
          <H2>
            <Trans id="midFeedback.thankYou" />
          </H2>
        </Info>
      ) : (
        <React.Fragment>
          <MidFormFeedbackButton
            onClick={() => setIsOpen(!isOpen)}
            label={<Trans id="midFeedback.summary" />}
          />
          {isOpen && (
            <Box color="rgb(232, 232, 232)">
              <H1>
                <Trans id="midFeedback.title" />
              </H1>
              <Formik
                initialValues={{
                  page: location.pathname,
                  midFeedback: [],
                  problemDescription: '',
                }}
                initialStatus={{ showWarning: false }}
                onSubmit={(values, { setStatus }) => {
                  if (
                    values.midFeedback.length === 0 &&
                    values.problemDescription.length === 0
                  ) {
                    setStatus({ showWarning: true })
                  } else {
                    setIsSubmit('feedback.submitted')
                    props.onSubmit(values)
                  }
                }}
              >
                {({ handleSubmit, handleChange, handleBlur, status }) => (
                  <Form onSubmit={handleSubmit}>
                    <Container>
                      <Row className="form-question">
                        {status.showWarning ? (
                          <Error>
                            <Trans id="finalFeedback.warning" />
                          </Error>
                        ) : null}
                      </Row>
                      <Row className="form-question">
                        <Row
                          className="form-label"
                          style={{ marginTop: '1rem' }}
                        >
                          <Trans id="midFeedback.problem.label" />
                        </Row>
                        <Row className="form-helper-text">
                          <Trans id="midFeedback.problem.helperText" />
                        </Row>
                      </Row>
                      <Row className="form-section">
                        <FieldArray
                          name="midFeedback"
                          className="form-section"
                          render={() =>
                            midFeedback.map((question) => {
                              return (
                                <React.Fragment key={question.name}>
                                  <Field
                                    name="midFeedback"
                                    label={question.checkboxLabel}
                                    component={CheckBox}
                                    value={question.checkboxValue}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="checkbox"
                                    id={'checkbox-' + question.name}
                                  ></Field>
                                </React.Fragment>
                              )
                            })
                          }
                        />
                      </Row>

                      <Row className="form-section">
                        <Field
                          name="problemDescription"
                          label={<Trans id="midFeedback.description.label" />}
                          helpText={
                            <Trans id="midFeedback.description.helperText" />
                          }
                          component={TextArea}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="problemDescription"
                          type="text"
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
            </Box>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
MidFeedbackForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
