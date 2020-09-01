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
import { evalDate, evalDateRange } from '../utils/validateDate'

export const WhenDidItHappenForm = (props) => {
  const [data] = useStateValue()
  const whenDidItHappen = {
    ...data.formData.whenDidItHappen,
  }

  const formOptions = [
    {
      name: 'happenedOnce',
      value: 'once',
      id: 'incidentFrequency-Once',
      radioLabel: <Trans id="whenDidItHappenPage.options.once" />,
      datePickerLabel: <Trans id="whenDidItHappenPage.singleDate.label" />,
      datePickerHelpText: <Trans id="whenDidItStart.labelExample" />,
      datePickerId: 'happenedOnce',
    },
    {
      name: 'happenedMoreThanOnce',
      value: 'moreThanOnce',
      id: 'happenedMoreThanOnce',
      radioLabel: <Trans id="whenDidItHappenPage.options.moreThanOnce" />,
      datePickerStartLabel: (
        <Trans id="whenDidItHappenPage.dateRange.start.label" />
      ),
      datePickerStartHelpText: <Trans id="whenDidItStart.labelExample" />,
      datePickerStartId: 'happenedMoreThanOnceStart',
      datePickerEndLabel: (
        <Trans id="whenDidItHappenPage.dateRange.end.label" />
      ),
      datePickerEndHelpText: <Trans id="whenDidItStart.labelExample" />,
      datePickerEndId: 'happenedMoreThanOnceEnd',
    },
    {
      name: 'description',
      value: 'notSure',
      id: 'incidentFrequency-NotSure',
      radioLabel: <Trans id="whenDidItHappenPage.options.notSure" />,
      descriptionLabel: <Trans id="whenDidItHappenPage.notSure.label" />,
      descriptionHelpText: (
        <Trans id="whenDidItHappenPage.notSure.helperText" />
      ),
    },
  ]

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

  const evalDateInput = (values) => {
    let errors = {}

    if (values.incidentFrequency === 'once') {
      const happenedOnceError = evalDate(
        values.happenedOnceDay,
        values.happenedOnceMonth,
        values.happenedOnceYear,
      )

      if (happenedOnceError) {
        errors['happenedOnce'] = happenedOnceError
      }
    } else if (values.incidentFrequency === 'moreThanOnce') {
      const dateRangeErrors = evalDateRange(values)

      if (dateRangeErrors.startError) {
        errors['start'] = dateRangeErrors.startError
      }

      if (dateRangeErrors.endError) {
        errors['end'] = dateRangeErrors.endError
      }
    }

    return errors
  }

  const checkRequiredFields = (values) => {}

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
        validateOnChange={false}
        validationSchema={whenDidItHappenFormSchema()}
        validate={(values) => {
          return evalDateInput(values)
        }}
        onSubmit={async (values) => {
          await clearData(values)
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
                {Object.keys(errors).length > 0 && (
                  <ErrorSummary errors={errors} />
                )}
                <Row className="form-label">
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
                              <React.Fragment>
                                {errors.happenedOnce && (
                                  <Error>{errors.happenedOnce}</Error>
                                )}
                                <Field
                                  name={question.name}
                                  label={question.datePickerLabel}
                                  helpText={question.datePickerHelpText}
                                  component={DatePicker}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  id={question.datePickerId}
                                />
                              </React.Fragment>
                            )}
                            {question.value === 'moreThanOnce' && (
                              <React.Fragment>
                                {errors.start && <Error>{errors.start}</Error>}
                                <Field
                                  name="start"
                                  label={question.datePickerStartLabel}
                                  helpText={question.datePickerStartHelpText}
                                  component={DatePicker}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  id={question.datePickerStartId}
                                />
                                {errors.end && <Error>{errors.end}</Error>}
                                <Field
                                  name="end"
                                  label={question.datePickerEndLabel}
                                  helpText={question.datePickerEndHelpText}
                                  component={DatePicker}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  id={question.datePickerEndId}
                                />
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
