import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { FormControl, Stack, Box } from '@chakra-ui/core'
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

const validate = () => {
  return {}
}

export const HowDidItStartForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const channel = {
    howDidTheyReachYou: [],
    ...data.formData.channel
  }
  //TODO: Move this form data to some sort of a schema file instead?
  var questionsList =[
   { name:"email", channel:"howDidTheyReachYou.email", label: "howDidTheyReachYouLabel.question1", hint: "howDidTheyReachYouLabel.hint1" },
   { name:"phone", channel:"howDidTheyReachYou.phone", label: "howDidTheyReachYouLabel.question2", hint: "howDidTheyReachYouLabel.hint2" },
   { name:"online", channel:"howDidTheyReachYou.online", label: "howDidTheyReachYouLabel.question3", hint: "howDidTheyReachYouLabel.hint3" },
   { name:"application", channel:"howDidTheyReachYou.app", label: "howDidTheyReachYouLabel.question4", hint: "howDidTheyReachYouLabel.hint4" },
   { name:"others", channel:"howDidTheyReachYou.others", label: "howDidTheyReachYouLabel.question5", hint: "howDidTheyReachYouLabel.hint5"}
  ];

  return (
    <React.Fragment>

    {/*
          {false ? (
            <div>
              //TODO: mark the proper ids for lingui
              <Trans id="howDidTheyReachYou.email" />
              <Trans id="howDidTheyReachYou.phone" />
              <Trans id="howDidTheyReachYou.online" />
              <Trans id="howDidTheyReachYou.app" />
              <Trans id="howDidTheyReachYou.others" />
            </div>
          ) : null}
    */}
      <Form
        initialValues={channel}
        onSubmit={data => props.onSubmit(data)}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Control as="fieldset" name="howDidTheyReachYou">
              <FormLabel as="legend" htmlFor="howDidTheyReachYou" mb={2}>
                <Trans id="howDidTheyReachYou.question" />
              </FormLabel>
              <Stack spacing={4} shouldWrapChildren>

                {questionsList.map((question) => {
                  return (
                    <Box question={question.channel}>
                      <CheckboxArrayControl
                        name="howDidTheyReachYou"
                        value={question.channel}
                        isChecked={channel.howDidTheyReachYou.includes(question.channel)}
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

            <NextAndCancelButtons>
              <Trans id="howDidItStartPage.nextButton">
                Next: ??
              </Trans>
            </NextAndCancelButtons>
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

HowDidItStartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
