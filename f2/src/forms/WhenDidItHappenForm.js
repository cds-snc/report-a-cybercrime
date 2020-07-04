import React from 'react'
import PropTypes from 'prop-types'
// import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
// import { CheckboxAdapter } from '../components/checkbox'
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
      props
        .onSubmit
        // clearData({ ...data, phone: formatPhoneNumber(data.phone) }),
        ()
  }

  //   const { i18n } = useLingui()
  const [data] = useStateValue()
  const whendiditstart = {
    ...formDefaults.whendiditstart,
    ...data.formData.whendiditstart,
  }

  //   //TODO: Move this form data to some sort of a schema file instead?

  //   const howManyTimes = [
  //     'howManyTimes.once',
  //     'howManyTimes.severalTimes',
  //     'howManyTimes.notSure',
  //   ]
  //TODO: Move this form data to some sort of a schema file instead?

  var questionsList = [
    {
      name: 'once',
      channel: 'howOften.once',
      label: 'howOftenLabel.question1',
      hint: 'howOftenLabel.hint1',
    },
    {
      name: 'morethanonce',
      channel: 'howOften.morethanonce',
      label: 'howOftenLabel.question2',
      hint: 'howOftenLabel.hint2',
    },
    {
      name: 'notsure',
      channel: 'howOften.notsure',
      label: 'howOftenLabel.question3',
      hint: 'howOftenLabel.hint3',
    },
  ]

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          {/* <Trans id="howManyTimes.once" />
          <Trans id="howManyTimes.severalTimes" />
          <Trans id="howManyTimes.notSure" /> */}
          <Trans id="howOftenLabel.question1" />
          <Trans id="howOftenLabel.question2" />
          <Trans id="howOftenLabel.question3" />
          <Trans id="howOftenLabel.hint1" />
          <Trans id="howOftenLabel.hint2" />
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
              label={<Trans id="howOften.label" />}
            >
              if (question.name==='once') return (
              <React.Fragment key="howOften.once">
                <RadioAdapter
                  name="howOften"
                  value="once"
                  conditionalField={
                    <Field
                      name={<Trans id="howOften.once" />}
                      // name ="once"
                      label={<Trans id="howOftenLabel.question1" />}
                      helperText={<Trans id="howOftenLabel.hint1" />}
                      component={TextArea}
                    />
                  }
                ></RadioAdapter>
                {/* {i18n._(questionsList.name)} */}
              </React.Fragment>
              )} else if (question.name==='morethanonce') return (
              <React.Fragment key="howOften.morethanonce">
                <RadioAdapter
                  name="howOften"
                  value="morethanonce"
                  conditionalField={
                    <React.Fragment>
                      <Stack>
                        <Field
                          name={<Trans id="howOften.morethanonce" />}
                          label={<Trans id="howOftenLabel.question2.1" />}
                          helperText={<Trans id="howOftenLabel.hint1" />}
                          component={TextArea}
                        />
                        <Field
                          name={<Trans id="howOften.morethanonce" />}
                          label={<Trans id="howOftenLabel.question2.2" />}
                          helperText={<Trans id="howOftenLabel.hint1" />}
                          component={TextArea}
                        />
                      </Stack>
                    </React.Fragment>
                  }
                ></RadioAdapter>
              </React.Fragment>
              )} else if (question.name==='notsure') return (
              <React.Fragment key="howOften.notSure">
                <RadioAdapter
                  name="howOften"
                  value="notSure"
                  conditionalField={
                    <Field
                      name={<Trans id="howOften.notSure" />}
                      label={<Trans id="howOftenLabel.question3" />}
                      helperText={<Trans id="howOftenLabel.hint3" />}
                      component={TextArea}
                    />
                  }
                ></RadioAdapter>
              </React.Fragment>
              )} }{/* else if (questin.name===) */}
              {/* {questionsList.map((question) => {
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
                      } */}
              {/* >
                      {i18n._(question.channel)}
                    </RadioAdapter>
                  </React.Fragment>
                )
              })} */}
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
