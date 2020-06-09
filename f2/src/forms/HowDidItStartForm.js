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
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formatPhoneNumber } from '../utils/formatPhoneNumber'
import { formDefaults } from './defaultValues'
import { validateDate } from '../utils/validateDate'

const validate = (values) => {
  const errors = {}
  const startDate = validateDate(
    values.startYear,
    values.startMonth,
    values.startDay,
  )
  errors.whenDidItStart = []
  startDate.map((key) => {
    return errors.whenDidItStart.push(`whenDidItStart.error.${key}`)
  })
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
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.howdiditstart))
      props.onSubmit(
        clearData({ ...data, phone: formatPhoneNumber(data.phone) }),
      )
  }

  const { i18n } = useLingui()
  const [data] = useStateValue()
  const howdiditstart = {
    ...formDefaults.howdiditstart,
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
        initialValues={howdiditstart}
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
