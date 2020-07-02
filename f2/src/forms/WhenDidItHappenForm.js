import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
// import { CheckboxAdapter } from '../components/checkbox'
// import { RadioboxAdapter } from '../components/radioselect'
import { RadioAdapter } from '../components/radio'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormArrayControl } from '../components/FormArrayControl'
// import { TextArea } from '../components/text-area'
import { TextInput } from '../components/TextInput'
import { Field } from '../components/Field'
import { Well } from '../components/Messages'
import { ErrorSummary } from '../components/ErrorSummary'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
// import { formatPhoneNumber } from '../utils/formatPhoneNumber'
import { formDefaults } from './defaultValues'
import { validateDate } from '../utils/validateDate'
import { TextArea } from '../components/text-area'

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

export const WhenDidItHappenForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.whendidithappen))
      props.onSubmit()
  }

  const { i18n } = useLingui()
  const [data] = useStateValue()
  const whendiditstart = {
    ...formDefaults.whendiditstart,
    ...data.formData.whendiditstart,
  }

  //TODO: Move this form data to some sort of a schema file instead?

  var questionsList = [
    {
      name: 'once',
      channel: 'howOften.once',
      label: 'howoftenLabel.question1',
      hint: 'howOftenLabel.hint1',
    },
    {
      name: 'morethanonce',
      channel: 'howOften.morethanonce',
      label: 'howoftenLabel.question2',
      hint: 'howoftenLabel.hint2',
    },
    {
      name: 'notsure',
      channel: 'howOften.notsure',
      label: 'howoftenLabel.question3',
      hint: 'howoftenLabel.hint3',
    },
  ]
  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="howoftenLabel.question1" />
          <Trans id="howoftenLabel.question2" />
          <Trans id="howoftenLabel.question3" />
          <Trans id="howoftenLabel.hint1" />
          <Trans id="howoftenLabel.hint2" />
          <Trans id="howoftenLabel.hint3" />
          <Trans id="howoften.once" />
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
        initialValues={whendiditstart}
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
              name="howOften"
              label={<Trans id="howoftenLabel.question" />}
            >
              {/** All questions have conditional fields. It makes sense to use the map function */}
              {questionsList.map((question) => {
                return (
                  <React.Fragment key={question.channel}>
                    <RadioAdapter
                      name="howOften"
                      value={question.channel}
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
                    </RadioAdapter>
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
