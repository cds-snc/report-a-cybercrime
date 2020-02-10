import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { Radio, RadioAdapter } from '../components/radio'
import {
  FormControl,
  Stack,
  Box,
  RadioGroup,
  CheckboxGroup,
} from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { TextArea } from '../components/text-area'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'
import { ConditionalForm } from '../components/container'
import { FormArrayControl } from '../components/FormArrayControl'
import { Field as ConditionalField } from '../components/Field'

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
            <FormArrayControl
              name="howDidTheyReachYou"
              label={<Trans id="howDidTheyReachYou.question" />}
              helperText={<Trans id="howDidTheyReachYou.reminder" />}
            >
              <CheckboxGroup spacing={4}>
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
                        <ConditionalField
                          name={question.name}
                          label={<Trans id={question.label} />}
                          helperText={<Trans id={question.hint} />}
                        >
                          <TextArea
                            name={props.input.name}
                            value={props.input.value}
                            onChange={props.input.onChange}
                          />
                        </ConditionalField>
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
              </CheckboxGroup>
            </FormArrayControl>

            <FormArrayControl
              name="whenDidItStart"
              label={<Trans id="whenDidItStart.label" />}
            >
              <RadioGroup spacing={4}>
                {whenDidItStart.map(key => {
                  return (
                    <React.Fragment key={key}>
                      <RadioAdapter
                        name="whenDidItStart"
                        value={key}
                        isChecked={timeline.whenDidItStart.includes(key)}
                      >
                        {i18n._(key)}
                      </RadioAdapter>
                    </React.Fragment>
                  )
                })}
              </RadioGroup>
            </FormArrayControl>

            <FormArrayControl
              name="howManyTimes"
              label={<Trans id="howManyTimes.label" />}
            >
              <RadioGroup spacing={4}>
                {howManyTimes.map(key => {
                  return (
                    <Box key={key}>
                      <RadioAdapter
                        name="howManyTimes"
                        value={key}
                        isChecked={recurrenceCheck.howManyTimes.includes(key)}
                      >
                        {i18n._(key)}
                      </RadioAdapter>
                    </Box>
                  )
                })}
              </RadioGroup>
            </FormArrayControl>
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
