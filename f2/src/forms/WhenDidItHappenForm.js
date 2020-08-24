import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field, FieldArray, ErrorMessage } from 'formik'
import { Radio } from '../components/formik/radio'
import { DatePicker } from '../components/formik/datePicker'
import { NextCancelButtons } from '../components/formik/button'
import { Error, Info } from '../components/formik/alert'
import { TextArea } from '../components/formik/textArea'
import { whenDidItHappenFormSchema } from './whenDidItHappenFormSchema'
import moment from 'moment'

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
      datePickerId: 'singleIncident',
    },
    {
      name: 'happenedMoreThanOnce',
      value: 'moreThanOnce',
      id: 'incidentFrequency-MoreThanOnce',
      radioLabel: <Trans id="whenDidItHappenPage.options.moreThanOnce" />,
      datePickerStartLabel: (
        <Trans id="whenDidItHappenPage.dateRange.start.label" />
      ),
      datePickerStartHelpText: <Trans id="whenDidItStart.labelExample" />,
      datePickerStartId: 'multipleIncidentsStart',
      datePickerEndLabel: (
        <Trans id="whenDidItHappenPage.dateRange.end.label" />
      ),
      datePickerEndHelpText: <Trans id="whenDidItStart.labelExample" />,
      datePickerEndId: 'multipleIncidentsEnd',
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

  const formatData = (values) => {
    let errors = {}

    if (values.incidentFrequency === 'once') {
      errors['happenedOnceError'] = evalDate(
        values.happenedOnceDay,
        values.happenedOnceMonth,
        values.happenedOnceYear,
      )

      values.startDay = ''
      values.startMonth = ''
      values.startYear = ''
      values.endDay = ''
      values.endMonth = ''
      values.endYear = ''

      values.description = ''
    } else if (values.incidentFrequency === 'moreThanOnce') {
      errors = evalDateRange(values)

      values.happenedOnceDay = ''
      values.happenedOnceMonth = ''
      values.happenedOnceYear = ''

      values.description = ''
    } else {
      values.happenedOnceDay = ''
      values.happenedOnceMonth = ''
      values.happenedOnceYear = ''
      values.startDay = ''
      values.startMonth = ''
      values.startYear = ''
      values.endDay = ''
      values.endMonth = ''
      values.endYear = ''
    }

    return errors
  }

  const evalDate = (day, month, year) => {
    const date = moment(`${month} ${day} ${year}`, 'MM DD YYYY')

    if (!date.isValid()) {
      return 'Invalid date'
    }

    if (date.isAfter(moment.now())) {
      return 'Date cannot be in the future'
    }

    return null
  }

  const evalDateRange = (values) => {
    const errors = {}
    let startDate = null
    let endDate = null

    if (values.startDay || values.startMonth || values.startYear) {
      errors['startDay'] = evalDate(
        values.startDay,
        values.startMonth,
        values.startYear,
      )

      startDate = moment(
        `${values.startMonth} ${values.startDay} ${values.startYear}`,
        'MM DD YYYY',
      )
    }

    if (values.endDay || values.endMonth || values.endYear) {
      errors['endDay'] = evalDate(
        values.endDay,
        values.endMonth,
        values.endYear,
      )

      endDate = moment(
        `${values.endMonth} ${values.endDay} ${values.endYear}`,
        'MM DD YYYY',
      )
    }
    console.log(`${startDate} - ${endDate}`)

    if (startDate && endDate) {
      if (startDate.isAfter(endDate)) {
        errors['endDay'] = 'End date must be after start date'
      }
    }

    return errors
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={whenDidItHappen}
        initialStatus={{ errors: '' }}
        validationSchema={whenDidItHappenFormSchema()}
        onSubmit={(values, { setStatus }) => {
          const errors = formatData(values)
          Object.keys(errors).forEach((key) => {
            setStatus({ errors: { [key]: errors[key] } })
          })
          console.log(JSON.stringify(errors, null, 2))
          console.log(JSON.stringify(values, null, 2))
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, status }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
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
                            onChange={() => {
                              handleChange()
                              setErrors({})
                            }}
                            onBlur={handleBlur}
                            type="radio"
                            id={question.id}
                          >
                            {question.value === 'once' && (
                              <React.Fragment>
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
                                <Field
                                  name="start"
                                  label={question.datePickerStartLabel}
                                  helpText={question.datePickerStartHelpText}
                                  component={DatePicker}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  id={question.datePickerStartId}
                                />
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
