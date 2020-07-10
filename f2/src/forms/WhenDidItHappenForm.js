import React from 'react'
import PropTypes from 'prop-types'
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
import { validateDate } from '../utils/validateDate'
import { SingleDatePicker, DateRangePicker } from '../components/datePicker'

let validate = (values) => {
  const errors = {}

  if (values.howOften === 'morethanonce') {
    const startDate = validateDate(
      values.whenDidItStartYear,
      values.whenDidItStartMonth,
      values.whenDidItStartDay,
    )
    const endDate = validateDate(
      values.whenDidItEndYear,
      values.whenDidItEndMonth,
      values.whenDidItEndDay,
    )

    errors.startDate = []
    startDate.map((key) => {
      return errors.startDate.push(`whenDidItStart.error.${key}`)
    })

    errors.endDate = []
    endDate.map((key) => {
      return errors.endDate.push(`whenDidItStart.error.${key}`)
    })
  } else if (values.howOften === 'once') {
    const singleDate = validateDate(
      values.whenDidItHappenYear,
      values.whenDidItHappenMonth,
      values.whenDidItHappenDay,
    )

    errors.singleDate = []
    singleDate.map((key) => {
      return errors.singleDate.push(`whenDidItStart.error.${key}`)
    })
  }

  return errors
}

const clearData = (dataOrig) => {
  let data = JSON.parse(JSON.stringify(dataOrig))
  if (data.howOften !== 'once') {
    data.whenDidItHappenDay = ''
    data.whenDidItHappenMonth = ''
    data.whenDidItHappenYear = ''
  }

  if (data.howOften !== 'morethanonce') {
    data.whenDidItStartDay = ''
    data.whenDidItStartMonth = ''
    data.whenDidItStartYear = ''
    data.whenDidItEndDay = ''
    data.whenDidItEndMonth = ''
    data.whenDidItEndYear = ''
  }

  return data
}

export const WhenDidItHappenForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.whendidithappen)) {
      props.onSubmit(clearData({ ...data }))
    }
  }

  const [data] = useStateValue()
  const whendidithappen = {
    ...formDefaults.whendidithappen,
    ...data.formData.whendidithappen,
  }

  console.log(`whendidithappen: ${JSON.stringify(whendidithappen, null, 2)}`)

  //   const howOften = [
  //     'howOften.once',
  //     'howOften.moreThanOnce',
  //     'howOften.notSure',
  //   ]
  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="howOftenLabel.question1" />
          <Trans id="howOftenLabel.question2.1" />
          <Trans id="howOftenLabel.question2.2" />
          <Trans id="howOftenLabel.question3" />
          <Trans id="howOftenLabel.hint1" />
          <Trans id="howOftenLabel.hint3" />
          <Trans id="howOften.once" />
          <Trans id="howOften.morethanonce" />
          <Trans id="howOften.notSure" />

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
        initialValues={whendidithappen}
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
                <Trans id="whenDidItStart.hasValidationErrors" />
              </ErrorSummary>
            ) : null}
            <FormArrayControl
              name="whendidithappen"
              label={<Trans id="howOften.label" />}
              errors={errors}
            >
              <React.Fragment>
                <RadioAdapter
                  name="howOften"
                  value="once"
                  conditionalField={
                    <Field
                      component={SingleDatePicker}
                      name="singleIncidentDate"
                      datePickerName="whenDidItHappen"
                      group="singleDate"
                      label={<Trans id="howOftenLabel.question1" />}
                      helperText={<Trans id="howOftenLabel.hint1" />}
                    />
                  }
                >
                  <Trans id="howOften.once" />
                </RadioAdapter>
              </React.Fragment>
              <React.Fragment>
                <RadioAdapter
                  name="howOften"
                  value="morethanonce"
                  conditionalField={
                    <Stack>
                      <Field
                        component={SingleDatePicker}
                        name="whenDidItStart"
                        datePickerName="whenDidItStart"
                        group="singleDate"
                        label={<Trans id="howOftenLabel.question2.1" />}
                        helperText={<Trans id="howOftenLabel.hint1" />}
                      />
                      \n
                      <Field
                        component={SingleDatePicker}
                        name="whenDidItEnd"
                        datePickerName="whenDidItEnd"
                        group="singleDate"
                        label={<Trans id="howOftenLabel.question2.2" />}
                        helperText={<Trans id="howOftenLabel.hint1" />}
                      />
                    </Stack>
                  }
                >
                  <Trans id="howOften.morethanonce" />
                </RadioAdapter>
              </React.Fragment>
              <React.Fragment>
                <RadioAdapter
                  name="howOften"
                  value="notSure"
                  conditionalField={
                    <Field
                      name="unsureDates"
                      label={<Trans id="howOftenLabel.question3" />}
                      helperText={<Trans id="howOftenLabel.hint3" />}
                      component={TextArea}
                    />
                  }
                >
                  <Trans id="howOften.notSure" />
                </RadioAdapter>
              </React.Fragment>
            </FormArrayControl>
            <Well variantColor="blue">
              <Trans id="howDidItStartPage.tip" />
            </Well>
            <NextAndCancelButtons
              next={<Trans id="WhenDidItHappenPage.nextPage" />}
              button={<Trans id="WhenDidItHappenPage.nextButton" />}
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
