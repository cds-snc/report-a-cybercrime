import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { Radio } from '../components/radio'
import { FormControl, Stack, Box, VisuallyHidden } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { TextArea } from '../components/text-area'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
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

export const FinalFeedbackForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const howdiditstart = {
    howDidTheyReachYou: [],
    ...data.formData.howdiditstart,
  }

  const wasServiceHard = [
    'finalFeedback.wasServiceHard.veryHard',
    'finalFeedback.wasServiceHard.hard',
    'finalFeedback.wasServiceHard.neutral',
    'finalFeedback.wasServiceHard.easy',
    'finalFeedback.wasServiceHard.veryEasy',
  ]

  const wouldYouUseAgain = [
    'finalFeedback.wouldYouUseAgain.yes',
    'finalFeedback.wouldYouUseAgain.no',
    'finalFeedback.wouldYouUseAgain.maybe',
  ]

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="finalFeedback.wasServiceHard.veryHard" />
          <Trans id="finalFeedback.wasServiceHard.hard" />
          <Trans id="finalFeedback.wasServiceHard.neutral" />
          <Trans id="finalFeedback.wasServiceHard.easy" />
          <Trans id="finalFeedback.wasServiceHard.veryEasy" />
          <Trans id="finalFeedback.wouldYouUseAgain.yes" />
          <Trans id="finalFeedback.wouldYouUseAgain.no" />
          <Trans id="finalFeedback.wouldYouUseAgain.maybe" />
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
            <Control as="fieldset" name="wasServiceHard">
              <FormLabel as="legend" htmlFor="wasServiceHard" mb={2}>
                <Trans id="finalFeedback.wasServiceHard.label" />
              </FormLabel>
              <Stack spacing={4} shouldWrapChildren>
                {wasServiceHard.map(key => {
                  return (
                    <Box key={key}>
                      <RadioButtonArrayControl
                        name="wasServiceHard"
                        value={key}
                      >
                        {i18n._(key)}
                      </RadioButtonArrayControl>
                    </Box>
                  )
                })}
              </Stack>
            </Control>

            <Control as="fieldset" name="wouldYouUseAgain">
              <FormLabel as="legend" htmlFor="wouldYouUseAgain" mb={2}>
                <Trans id="finalFeedback.wouldYouUseAgain.label" />
              </FormLabel>
              <Stack spacing={4} shouldWrapChildren>
                {wouldYouUseAgain.map(key => {
                  return (
                    <Box key={key}>
                      <RadioButtonArrayControl
                        name="wouldYouUseAgain"
                        value={key}
                      >
                        {i18n._(key)}
                      </RadioButtonArrayControl>
                    </Box>
                  )
                })}
              </Stack>
            </Control>

            <Field name="howCanWeDoBetter">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="howCanWeDoBetter">
                    <Trans id="finalFeedback.howCanWeDoBetter.label" />
                  </FormLabel>
                  <FormHelperText>
                    <Trans id="finalFeedback.howCanWeDoBetter.helper">
                      <VisuallyHidden as="span" />
                    </Trans>
                  </FormHelperText>
                  <TextArea
                    id="howCanWeDoBetter"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>

            <Box as="form" onSubmit={handleSubmit}>
              <NextAndCancelButtons
                next={<Trans id="confirmationPage.correctInfo" />}
                button={<Trans id="confirmationPage.nextButton" />}
              />
            </Box>
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

FinalFeedbackForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}