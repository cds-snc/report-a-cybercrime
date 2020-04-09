import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { CheckboxAdapter } from '../components/checkbox'
import { RadioAdapter } from '../components/radio'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormArrayControl } from '../components/FormArrayControl'
import { TextArea } from '../components/text-area'
import { TextInput } from '../components/TextInput'
import { Field } from '../components/Field'
import { Well } from '../components/Messages'
import { ErrorSummary } from '../components/ErrorSummary'

//add validate functin for test
export const validate = (values) => {
  const errors = {}
  //condition for an error to occur: append a lingui id to the list of error
  // if it has a value AND this value is a number over 31
  if (
    values.startDay &&
    (isNaN(values.startDay) ||
      values.startDay > 31 ||
      values.startDay === '0' ||
      values.startDay === '00')
  ) {
    errors.whenDidItStart = 'whenDidItStart.startDate.warning'
    errors.startDay = true
  }
  // if it has a value AND this value is a number over 12
  if (
    values.startMonth &&
    (isNaN(values.startMonth) ||
      values.startMonth > 12 ||
      values.startMonth === '0' ||
      values.startMonth === '00')
  ) {
    errors.whenDidItStart = 'whenDidItStart.startMonth.warning'
    errors.startMonth = true
  }
  // if it has a value AND year is a number containing 4 digits
  if (
    values.startYear &&
    (isNaN(values.startYear) ||
      values.startYear.length !== 4 ||
      values.startYear === '0000')
  ) {
    errors.whenDidItStart = 'whenDidItStart.startYear.warning'
    errors.startYear = true
  }

  // if date is in the future and date is valid
  // values.startMonth - 1 : UTC Date Months are values from 0 to 11
  if (
    Date.UTC(values.startYear, values.startMonth - 1, values.startDay) >
    Date.now()
  ) {
    errors.whenDidItStart = 'whenDidItStart.errorMessage'
    errors.startDay = true
    errors.startMonth = true
    errors.startYear = true
  }
  // validate if the date in different month  match the calendar
  var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (values.startMonth === 1 || values.startMonth > 2) {
    if (values.startDay > ListofDays[values.startMonth - 1]) {
      errors.whenDidItStart = 'whenDidItStart.startDate.warning'
      errors.startDay = true
    }
  }
  //validate if the dayin Feb can't be >29 in leap year, the day in Feb can't be >28 in non-leap year
  if (values.startMonth === 2) {
    var lyear = false
    if (
      (!(values.startYear % 4) && values.startYear % 100) ||
      !(values.startYear % 400)
    ) {
      lyear = true
    }
    if (lyear === false && values.startDay >= 29) {
      errors.whenDidItStart = 'whenDidItStart.startDate.warning'
      errors.startDay = true
    }
    if (lyear === true && values.startDay > 29) {
      errors.whenDidItStart = 'whenDidItStart.startDate.warning'
      errors.startDay = true
    }
  }
  return errors
}

const clearData = (dataOrig) => {
  let data = JSON.parse(JSON.stringify(dataOrig))
  if (!data.howDidTheyReachYou.includes('howDidTheyReachYou.email'))
    data.email = ''
  if (!data.howDidTheyReachYou.includes('howDidTheyReachYou.phone'))
    data.phone = ''
  if (!data.howDidTheyReachYou.includes('howDidTheyReachYou.online'))
    data.online = ''
  if (!data.howDidTheyReachYou.includes('howDidTheyReachYou.app'))
    data.application = ''
  if (!data.howDidTheyReachYou.includes('howDidTheyReachYou.others'))
    data.others = ''
  return data
}

export const HowDidItStartForm = (props) => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const howdiditstart = {
    howDidTheyReachYou: [],
    application: '',
    others: '',
    startDay: '',
    startMonth: '',
    startYear: '',
    howManyTimes: '',
    ...data.formData.howdiditstart,
  }
  //TODO: Move this form data to some sort of a schema file instead?
  var questionsList = [
    {
      name: 'email',
      channel: 'howDidTheyReachYou.email',
      label: 'howDidTheyReachYouLabel.question1',
      hint: 'howDidTheyReachYouLabel.hint1',
    },
    {
      name: 'phone',
      channel: 'howDidTheyReachYou.phone',
      label: 'howDidTheyReachYouLabel.question2',
      hint: 'howDidTheyReachYouLabel.hint2',
    },
    {
      name: 'online',
      channel: 'howDidTheyReachYou.online',
      label: 'howDidTheyReachYouLabel.question3',
      hint: 'howDidTheyReachYouLabel.hint3',
    },
    {
      name: 'application',
      channel: 'howDidTheyReachYou.app',
      label: 'howDidTheyReachYouLabel.question4',
      hint: 'howDidTheyReachYouLabel.hint4',
    },
    {
      name: 'others',
      channel: 'howDidTheyReachYou.others',
      label: 'howDidTheyReachYouLabel.question5',
      hint: 'howDidTheyReachYouLabel.hint5',
    },
  ]

  const recurrenceCheck = {
    howManyTimes: [],
    ...data.formData.timeline,
  }

  const howManyTimes = [
    'howManyTimes.once',
    'howManyTimes.severalTimes',
    'howManyTimes.notSure',
  ]

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="howDidTheyReachYouLabel.question1" />
          <Trans id="howDidTheyReachYouLabel.question2" />
          <Trans id="howDidTheyReachYouLabel.question3" />
          <Trans id="howDidTheyReachYouLabel.question4" />
          <Trans id="howDidTheyReachYouLabel.question5" />
          <Trans id="howDidTheyReachYouLabel.hint1" />
          <Trans id="howDidTheyReachYouLabel.hint2" />
          <Trans id="howDidTheyReachYouLabel.hint3" />
          <Trans id="howDidTheyReachYouLabel.hint4" />
          <Trans id="howDidTheyReachYouLabel.hint5" />
          <Trans id="howDidTheyReachYou.email" />
          <Trans id="howDidTheyReachYou.phone" />
          <Trans id="howDidTheyReachYou.online" />
          <Trans id="howDidTheyReachYou.app" />
          <Trans id="howDidTheyReachYou.others" />
          <Trans id="howManyTimes.once" />
          <Trans id="howManyTimes.severalTimes" />
          <Trans id="howManyTimes.notSure" />
          <Trans id="whenDidItStart.errorMessage" />
          <Trans id="whenDidItStart.startDate.warning" />
          <Trans id="whenDidItStart.startMonth.warning" />
          <Trans id="whenDidItStart.startYear.warning" />
        </div>
      ) : null}

      <Form
        initialValues={howdiditstart}
        onSubmit={(data) => props.onSubmit(clearData(data))}
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
              <ErrorSummary onSubmit={handleSubmit} errors={errors} />
            ) : null}
            <FormArrayControl
              name="howDidTheyReachYou"
              label={<Trans id="howDidTheyReachYou.question" />}
              helperText={<Trans id="howDidTheyReachYou.reminder" />}
            >
              {/** All questions have conditional fields. It makes sense to use the map function */}
              {questionsList.map((question) => {
                return (
                  <React.Fragment key={question.channel}>
                    <CheckboxAdapter
                      name="howDidTheyReachYou"
                      value={question.channel}
                      isChecked={howdiditstart.howDidTheyReachYou.includes(
                        question.channel,
                      )}
                      conditionalField={
                        <Field
                          name={question.name}
                          label={<Trans id={question.label} />}
                          helperText={<Trans id={question.hint} />}
                          component={TextArea}
                        />
                      }
                    >
                      {i18n._(question.channel)}
                    </CheckboxAdapter>
                  </React.Fragment>
                )
              })}
            </FormArrayControl>

            <FormArrayControl
              name="whenDidItStart"
              label={<Trans id="whenDidItStart.label" />}
              helperText={<Trans id="whenDidItStart.labelExample" />}
              errors={errors}
            >
              <Stack direction="row" spacing="2">
                <Field
                  name="startDay"
                  label={<Trans id="whenDidItStart.startDay" />}
                  component={TextInput}
                  group="whenDidItStart"
                  w={70}
                  maxLength="2"
                />
                <Field
                  name="startMonth"
                  label={<Trans id="whenDidItStart.startMonth" />}
                  component={TextInput}
                  group="whenDidItStart"
                  w={70}
                  maxLength="2"
                />
                <Field
                  name="startYear"
                  label={<Trans id="whenDidItStart.startYear" />}
                  component={TextInput}
                  group="whenDidItStart"
                  w={110}
                  maxLength="4"
                />
              </Stack>
            </FormArrayControl>

            <FormArrayControl
              name="howManyTimes"
              label={<Trans id="howManyTimes.label" />}
            >
              {howManyTimes.map((key) => {
                return (
                  <React.Fragment key={key}>
                    <RadioAdapter
                      name="howManyTimes"
                      value={key}
                      isChecked={recurrenceCheck.howManyTimes.includes(key)}
                    >
                      {i18n._(key)}
                    </RadioAdapter>
                  </React.Fragment>
                )
              })}
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

HowDidItStartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
