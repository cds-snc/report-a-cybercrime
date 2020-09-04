import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field, FieldArray, ErrorMessage } from 'formik'
import { Radio } from '../components/formik/radio'
import { DatePicker } from '../components/formik/datePicker'
import { NextCancelButtons } from '../components/formik/button'
import { Error, Info, ErrorSummary } from '../components/formik/alert'
import { TextArea } from '../components/formik/textArea'
import { whenDidItHappenFormSchema } from './WhenDidItHappenFormSchema'

export const WhenDidItHappenForm = (props) => {
  const [data] = useStateValue()
  const whenDidItHappen = {
    ...data.formData.whenDidItHappen,
  }

  const once = whenDidItHappenFormSchema.QUESTIONS.once
  const moreThanOnce = whenDidItHappenFormSchema.QUESTIONS.moreThanOnce
  const notSure = whenDidItHappenFormSchema.QUESTIONS.notSure

  const formOptions = [once, moreThanOnce, notSure]

  const realTimeValidation = whenDidItHappenFormSchema.REAL_TIME_VALIDATION
  const onSubmitValidation = whenDidItHappenFormSchema.ON_SUBMIT_VALIDATION
  const createErrorSummary = whenDidItHappenFormSchema.CREATE_ERROR_SUMMARY

  const clearHappenedOnce = (values) => {
    values.happenedOnceDay = ''
    values.happenedOnceMonth = ''
    values.happenedOnceYear = ''
  }

  const clearDateRange = (values) => {
    values.startDay = ''
    values.startMonth = ''
    values.startYear = ''
    values.endDay = ''
    values.endMonth = ''
    values.endYear = ''
  }

  const clearDescription = (values) => {
    values.description = ''
  }

  const clearData = (values) => {
    if (values.incidentFrequency === 'once') {
      clearDateRange(values)
      clearDescription(values)
    } else if (values.incidentFrequency === 'moreThanOnce') {
      clearHappenedOnce(values)
      clearDescription(values)
    } else {
      clearHappenedOnce(values)
      clearDateRange(values)
    }
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={whenDidItHappen}
        validate={(values) => {
          return realTimeValidation(values)
        }}
        onSubmit={async (values, { setErrors }) => {
          const errors = onSubmitValidation(values)
          if (errors.fields) {
            setErrors(errors.fields)
          } else {
            await clearData(values)
            props.onSubmit(values)
          }
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, submitCount, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
                <ErrorSummary
                  errors={createErrorSummary(errors)}
                  submissions={submitCount}
                  title={<Trans id="default.hasValidationErrors" />}
                />
                <Row className="form-label" id="incidentFrequency">
                  <Trans id="whenDidItHappenPage.question" />
                </Row>
              </Row>
              <Row className="form-section">
                <ErrorMessage name="incidentFrequency" component={Error} />
                <FieldArray
                  name="incidentFrequency"
                  className="form-section"
                  render={() =>
                    formOptions.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="incidentFrequency"
                            label={question.radioLabel}
                            component={Radio}
                            value={question.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="radio"
                            id={question.id}
                          >
                            {question.value === 'once' && (
                              <div id={question.name}>
                                {errors && errors.happenedOnce && (
                                  <Error>
                                    {question.datePicker.errorMessage}
                                  </Error>
                                )}
                                <Field
                                  name={question.name}
                                  label={question.datePicker.label}
                                  helpText={question.datePicker.helpText}
                                  component={DatePicker}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  id={question.datePicker.id}
                                />
                              </div>
                            )}
                            {question.value === 'moreThanOnce' && (
                              <React.Fragment>
                                <div id="start">
                                  {errors && errors.start && (
                                    <Error>
                                      {question.datePickerStart.errorMessage}
                                    </Error>
                                  )}
                                  <Field
                                    name="start"
                                    label={question.datePickerStart.label}
                                    helpText={question.datePickerStart.helpText}
                                    component={DatePicker}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id={question.datePickerStart.id}
                                  />
                                </div>
                                <div id="end">
                                  {errors && errors.end && (
                                    <Error>
                                      {question.datePickerEnd.errorMessage}
                                    </Error>
                                  )}
                                  <Field
                                    name="end"
                                    label={question.datePickerEnd.label}
                                    helpText={question.datePickerEnd.helpText}
                                    component={DatePicker}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id={question.datePickerEnd.id}
                                  />
                                </div>
                              </React.Fragment>
                            )}
                            {question.value === 'notSure' && (
                              <Field
                                name={question.name}
                                label={question.descriptionLabel}
                                helpText={question.descriptionHelpText}
                                component={TextArea}
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                            )}
                          </Field>
                        </React.Fragment>
                      )
                    })
                  }
                />
              </Row>

              <Row className="form-section">
                <Info>
                  <Trans id="howDidItStartPage.tip" />
                </Info>
              </Row>

              <Row>
                <NextCancelButtons
                  submit={<Trans id="howDidItStartPage.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="whenDidItHappenPage.nextPage" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

WhenDidItHappenForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
