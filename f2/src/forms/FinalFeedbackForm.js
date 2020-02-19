import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import {
  FormControl,
  Stack,
  Box,
  VisuallyHidden,
  Alert,
  AlertIcon,
} from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { TextArea } from '../components/text-area'
import { FormLabel } from '../components/FormLabel'
import { Button } from '../components/button'
import { RadioAdapter } from '../components/radio'
import { FormArrayControl } from '../components/FormArrayControl'


const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const validate = () => {
  return {}
}

export const FinalFeedbackForm = props => {
  const { i18n } = useLingui()

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

  let showWarning = false

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
        initialValues={{
          wasServiceHard: '',
          wouldYouUseAgain: '',
          howCanWeDoBetter: '',
        }}
        onSubmit={values => {
          if (
            values.wasServiceHard.length === 0 &&
            values.wouldYouUseAgain.length === 0 &&
            values.howCanWeDoBetter.length === 0
          ) {
            showWarning = true
          } else {
            props.onSubmit(values)
          }
        }}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={12}
          >
            <Control as="fieldset" name="wasServiceHard">
            <FormArrayControl
              name="wasServiceHard"
              label={<Trans id="finalFeedback.wasServiceHard.label" />}
            >
              <Stack spacing={4}>
                {wasServiceHard.map(key => {
                  return (
                    <Box key={key}>
                      <RadioAdapter
                        name="wasServiceHard"
                        value={key}
                        isChecked={wasServiceHard.includes(key)}
                      >
                      {i18n._(key)}
                      </RadioAdapter>
                    </Box>
                  )
                })}
              </Stack>
            </FormArrayControl>
            </Control>

            <Control as="fieldset" name="wouldYouUseAgain">
              <Stack spacing={4} shouldWrapChildren>
                <FormArrayControl
                name="wasServiceHard"
                label={<Trans id="finalFeedback.wouldYouUseAgain.label" />}
                >
                  <Stack spacing={4}>
                  {wouldYouUseAgain.map(key => {
                      return (
                        <Box key={key}>
                          <RadioAdapter
                            name="wouldYouUseAgain"
                            value={key}
                            isChecked={wouldYouUseAgain.includes(key)}
                          >
                          {i18n._(key)}
                          </RadioAdapter>
                        </Box>
                      )
                    })}
                  </Stack>
                </FormArrayControl>
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

            {showWarning ? (
              <Control>
                <Alert status="warning">
                  <AlertIcon />
                  <Trans id="finalFeedback.warning" />
                </Alert>
              </Control>
            ) : null}

            <Button
              type="submit"
              w={{ base: '100%', md: 'auto' }}
              variantColor="blue"
              mb={10}
            >
              <Trans id="finalFeedback.submit" />
            </Button>
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

FinalFeedbackForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
