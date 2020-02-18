/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { TextArea } from '../components/text-area'
import { FormHelperText } from '../components/FormHelperText'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { FormControl, Stack } from '@chakra-ui/core'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'

export const SuspectCluesForm = props => {
  const [data] = useStateValue()

  const suspectClues = {
    suspectClues1: '',
    suspectClues2: '',
    suspectClues3: '',
    ...data.formData.suspectClues,
  }

  return (
    <Form
      initialValues={suspectClues}
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} spacing={6} shouldWrapChildren>
          <Field name="suspectClues1">
            {props => (
              <FormControl>
                <FormLabel htmlFor="suspectClues1">
                  <Trans id="suspectClues.question1" />
                </FormLabel>

                <FormHelperText>
                  <Trans id="suspectClues.question1Details" />
                </FormHelperText>

                <TextArea
                  id="suspectClues1"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>

          <Field name="suspectClues2">
            {props => (
              <FormControl>
                <FormLabel htmlFor="suspectClues2">
                  <Trans id="suspectClues.question2" />
                </FormLabel>

                <FormHelperText>
                  <Trans id="suspectClues.question2Details" />
                </FormHelperText>

                <TextArea
                  id="suspectClues2"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>

          <Field name="suspectClues3">
            {props => (
              <FormControl>
                <FormLabel htmlFor="suspectClues3">
                  <Trans id="suspectClues.question3" />
                </FormLabel>

                <FormHelperText>
                  <Trans id="suspectClues.question3Details" />
                </FormHelperText>

                <TextArea
                  id="suspectClues3"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          <NextAndCancelButtons
            next={<Trans id="suspectClues.whatComesNext" />}
            button={<Trans id="suspectClues.nextButton" />}
          />
        </Stack>
      )}
    />
  )
}

SuspectCluesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
