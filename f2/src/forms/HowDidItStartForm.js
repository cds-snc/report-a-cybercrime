import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { Radio } from '../components/radio'
import { FormControl, Stack, Box, Alert, AlertIcon } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { TextArea } from '../components/text-area'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'
import { ConditionalForm } from '../components/container'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const CheckboxArrayControl = ({ name, value, defaultIsChecked, children }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: 'checkbox', // important for RFF to manage the checked prop
    value, // important for RFF to manage list of strings
    defaultIsChecked,
  })

  return (
    <Checkbox {...input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Checkbox>
  )
}

const RadioButtonArrayControl = ({
  name,
  value,
  defaultIsChecked,
  children,
}) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: 'radio',
    value,
    defaultIsChecked,
  })

  return (
    <Radio {...input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Radio>
  )
}

const validate = () => {
  return {}
}

export const HowDidItStartForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const howdiditstart = {
    howDidTheyReachYou: [],
    email: '',
    phone: '',
    online: '',
    application: '',
    others: '',
    whenDidItStart: '',
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

  const timeline = {
    whenDidItStart: [],
    ...data.formData.timeline,
  }

  const whenDidItStart = [
    'whenDidItStart.today',
    'whenDidItStart.pastWeek',
    'whenDidItStart.pastMonth',
    'whenDidItStart.pastYear',
    'whenDidItStart.moreThanOneYear',
  ]

  const recurrenceCheck = {
    howManyTimes: [],
    ...data.formData.timeline,
  }

  const howManyTimes = ['howManyTimes.once', 'howManyTimes.severalTimes']

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
          <Trans id="whenDidItStart.today" />
          <Trans id="whenDidItStart.pastWeek" />
          <Trans id="whenDidItStart.pastMonth" />
          <Trans id="whenDidItStart.pastYear" />
          <Trans id="whenDidItStart.moreThanOneYear" />
          <Trans id="howManyTimes.once" />
          <Trans id="howManyTimes.severalTimes" />
        </div>
      ) : null}

      <Form
        initialValues={howdiditstart}
        onSubmit={data => props.onSubmit(data)}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={12}
          >
            <Control as="fieldset" name="howDidTheyReachYou">
              <FormLabel as="legend" htmlFor="howDidTheyReachYou" mb={2}>
                <Trans id="howDidTheyReachYou.question" />
              </FormLabel>
              <FormHelperText>
                <Trans id="howDidTheyReachYou.reminder" />
              </FormHelperText>
              <Stack spacing={4} shouldWrapChildren>
                {questionsList.map(question => {
                  return (
                    <Box key={question.channel}>
                      <CheckboxArrayControl
                        name="howDidTheyReachYou"
                        value={question.channel}
                        isChecked={howdiditstart.howDidTheyReachYou.includes(
                          question.channel,
                        )}
                      >
                        {i18n._(question.channel)}
                      </CheckboxArrayControl>
                      {values.howDidTheyReachYou.includes(question.channel) && (
                        <ConditionalForm>
                          <Field name={question.name}>
                            {props => (
                              <FormControl>
                                <FormLabel htmlFor={question.name}>
                                  <Trans id={question.label} />
                                </FormLabel>
                                <FormHelperText>
                                  <Trans id={question.hint} />
                                </FormHelperText>
                                <TextArea
                                  id={question.hint}
                                  name={props.input.name}
                                  value={props.input.value}
                                  onChange={props.input.onChange}
                                />
                              </FormControl>
                            )}
                          </Field>
                        </ConditionalForm>
                      )}
                    </Box>
                  )
                })}
              </Stack>
            </Control>

            <Control as="fieldset" name="whenDidItStart">
              <FormLabel as="legend" htmlFor="whenDidItStart" mb={2}>
                <Trans id="whenDidItStart.label" />
              </FormLabel>
              <Stack spacing={4} shouldWrapChildren>
                {whenDidItStart.map(key => {
                  return (
                    <Box key={key}>
                      <RadioButtonArrayControl
                        name="whenDidItStart"
                        value={key}
                        isChecked={timeline.whenDidItStart.includes(key)}
                      >
                        {i18n._(key)}
                      </RadioButtonArrayControl>
                    </Box>
                  )
                })}
              </Stack>
            </Control>

            <Control as="fieldset" name="howManyTimes">
              <FormLabel as="legend" htmlFor="howManyTimes" mb={2}>
                <Trans id="howManyTimes.label" />
              </FormLabel>
              <Stack spacing={4} shouldWrapChildren>
                {howManyTimes.map(key => {
                  return (
                    <Box key={key}>
                      <RadioButtonArrayControl
                        name="howManyTimes"
                        value={key}
                        isChecked={recurrenceCheck.howManyTimes.includes(key)}
                      >
                        {i18n._(key)}
                      </RadioButtonArrayControl>
                    </Box>
                  )
                })}
              </Stack>
            </Control>

            <Alert status="success" backgroundColor="blue.100">
              <AlertIcon name="info-outline" color="blue.800" />
              <Trans id="howDidItStartPage.tip" />
            </Alert>

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
