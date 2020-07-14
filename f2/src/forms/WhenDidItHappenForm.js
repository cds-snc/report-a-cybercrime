import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { RadioAdapter } from '../components/radio'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormArrayControl } from '../components/FormArrayControl'
import { TextArea } from '../components/text-area'
import { Field } from '../components/Field'
import { Well } from '../components/Messages'
import { ErrorSummary } from '../components/ErrorSummary'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'
import { validateDate, validateDateRange } from '../utils/validateDate'
import { SingleDatePicker, DateRangePicker } from '../components/datePicker'

const validate = (values) => {
  const errors = {}

  if (values.incidentFrequency === 'once') {
    const singleDateErrors = validateDate(
      values.happenedOnceYear,
      values.happenedOnceMonth,
      values.happenedOnceDay,
    )

    errors.whenDidItStart = []
    singleDateErrors.map((key) => {
      return errors.whenDidItStart.push(`whenDidItStart.error.${key}`)
    })
  } else if (values.incidentFrequency === 'moreThanOnce') {
    const startDateErrors = validateDate(
      values.startYear,
      values.startMonth,
      values.startDay,
    )

    if (startDateErrors.length > 0) {
      errors.whenDidItStart = []
      startDateErrors.map((key) => {
        return errors.whenDidItStart.push(`whenDidItStart.error.${key}`)
      })
    }

    const endDateErrors = validateDate(
      values.endYear,
      values.endMonth,
      values.endDay,
    )

    if (endDateErrors.length > 0) {
      errors.whenDidItEnd = []
      endDateErrors.map((key) => {
        return errors.whenDidItEnd.push(`whenDidItStart.error.${key}`)
      })
    }

    if (startDateErrors.length === 0 && endDateErrors.length === 0) {
      const startDate = new Date(
        `${values.startYear} ${values.startMonth} ${values.startDay}`,
      )
      const endDate = new Date(
        `${values.endYear} ${values.endMonth} ${values.endDay}`,
      )

      errors.dateRangeErrors = validateDateRange(startDate, endDate)
    }
  }

  return errors
}

const clearData = (dataOrig) => {
  let data = JSON.parse(JSON.stringify(dataOrig))
  if (data.incidentFrequency !== 'moreThanOnce') {
    data.endYear = ''
    data.endMonth = ''
    data.endDay = ''
    data.startYear = ''
    data.startMonth = ''
    data.startDay = ''
  }
  if (data.incidentFrequency !== 'once') {
    data.happenedOnceYear = ''
    data.happenedOnceMonth = ''
    data.happenedOnceDay = ''
  }
  if (data.incidentFrequency !== 'notSure') {
    data.description = ''
  }

  return data
}

export const WhenDidItHappenForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.whenDidItHappen))
      props.onSubmit(clearData({ ...data }))
  }

  const { i18n } = useLingui()
  const [data] = useStateValue()
  const whenDidItHappen = {
    ...formDefaults.whenDidItHappen,
    ...data.formData.whenDidItHappen,
  }

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="whenDidItStart.startYear" />
          <Trans id="whenDidItHappenPage.title" />
          <Trans id="whenDidItHappenPage.intro" />
          <Trans id="whenDidItHappenPage.question" />
          <Trans id="whenDidItHappenPage.options.once" />
          <Trans id="whenDidItHappenPage.options.moreThanOnce" />
          <Trans id="whenDidItHappenPage.options.notSure" />
          <Trans id="whenDidItHappenPage.singleDate.label" />
          <Trans id="whenDidItHappenPage.dateRange.start.label" />
          <Trans id="whenDidItHappenPage.dateRange.end.label" />
          <Trans id="whenDidItHappenPage.notSure.label" />
          <Trans id="whenDidItHappenPage.notSure.helperText" />
          <Trans id="whenDidItStart.error.notDay" />
          <Trans id="whenDidItStart.error.notMonth" />
          <Trans id="whenDidItStart.error.isFuture" />
          <Trans id="whenDidItStart.error.notYear" />
          <Trans id="whenDidItStart.error.yearLength" />
          <Trans id="whenDidItStart.error.hasNoYear" />
          <Trans id="whenDidItStart.error.hasNoMonth" />
          <Trans id="whenDidItStart.error.hasNoDay" />
        </div>
      ) : null}

      <Form
        initialValues={whenDidItHappen}
        onSubmit={localOnSubmit}
        validate={validate}
        render={({
          handleSubmit,
          values,
          errors,
          submitFailed,
          hasValidationErrors,
        }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={12}
          >
            {submitFailed ? (
              <ErrorSummary>
                <Trans id="whenDidItHappen.hasValidationErrors" />
              </ErrorSummary>
            ) : null}
            <FormArrayControl
              name="whenDidItHappen"
              label={<Trans id="whenDidItHappenPage.question" />}
            >
              <React.Fragment>
                <RadioAdapter
                  name="incidentFrequency"
                  value="once"
                  conditionalField={
                    <SingleDatePicker
                      name="singleIncident"
                      datePickerName="happenedOnce"
                      label={
                        <Trans id="whenDidItHappenPage.singleDate.label" />
                      }
                      helperText={<Trans id="whenDidItStart.labelExample" />}
                    />
                  }
                >
                  <Trans id="whenDidItHappenPage.options.once" />
                </RadioAdapter>
              </React.Fragment>
              <React.Fragment>
                <RadioAdapter
                  name="incidentFrequency"
                  value="moreThanOnce"
                  conditionalField={
                    <DateRangePicker
                      name="multipleIncidents"
                      startLabel={
                        <Trans id="whenDidItHappenPage.dateRange.start.label" />
                      }
                      endLabel={
                        <Trans id="whenDidItHappenPage.dateRange.end.label" />
                      }
                      helperText={<Trans id="whenDidItStart.labelExample" />}
                    />
                  }
                >
                  <Trans id="whenDidItHappenPage.options.moreThanOnce" />
                </RadioAdapter>
              </React.Fragment>
              <React.Fragment>
                <RadioAdapter
                  name="incidentFrequency"
                  value="notSure"
                  conditionalField={
                    <Field
                      name="description"
                      label={<Trans id="whenDidItHappenPage.notSure.label" />}
                      helperText={
                        <Trans id="whenDidItHappenPage.notSure.helperText" />
                      }
                      component={TextArea}
                    />
                  }
                >
                  <Trans id="whenDidItHappenPage.options.notSure" />
                </RadioAdapter>
              </React.Fragment>
            </FormArrayControl>
            <Well variantColor="blue">
              <Trans id="howDidItStartPage.tip" />
            </Well>
            <NextAndCancelButtons
              next={<Trans id="howDidItStartPage.nextPage" />}
              button={<Trans id="howDidItStartPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

WhenDidItHappenForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
