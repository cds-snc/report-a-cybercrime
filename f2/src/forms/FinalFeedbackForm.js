import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { Stack } from '@chakra-ui/core'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { RadioAdapter } from '../components/radio'
import { FormArrayControl } from '../components/FormArrayControl'
import { Field } from '../components/Field'
import { Alert } from '../components/Messages'

const validate = () => {
  return {}
}

export const FinalFeedbackForm = (props) => {
  const { i18n } = useLingui()

  const wasServiceHard = [
    'finalFeedback.wasServiceHard.veryHard',
    'finalFeedback.wasServiceHard.hard',
    'finalFeedback.wasServiceHard.neutral',
    'finalFeedback.wasServiceHard.easy',
    'finalFeedback.wasServiceHard.veryEasy',
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
        onSubmit={(values) => {
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
            {showWarning ? (
              <Alert status="error">
                <Trans id="finalFeedback.warning" />
              </Alert>
            ) : null}
            <FormArrayControl
              name="wasServiceHard"
              label={<Trans id="finalFeedback.wasServiceHard.label" />}
            >
              {wasServiceHard.map((key) => {
                return (
                  <React.Fragment key={key}>
                    <RadioAdapter name="wasServiceHard" value={key}>
                      {i18n._(key)}
                    </RadioAdapter>
                  </React.Fragment>
                )
              })}
            </FormArrayControl>

            <Field
              name="howCanWeDoBetter"
              label={<Trans id="finalFeedback.howCanWeDoBetter.label" />}
              helperText={<Trans id="finalFeedback.howCanWeDoBetter.helper" />}
              component={TextArea}
            />

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
