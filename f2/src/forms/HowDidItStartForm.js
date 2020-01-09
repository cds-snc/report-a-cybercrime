/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../components/checkbox'
import { TextArea } from '../components/text-area'
import { FormHelperText } from '../components/FormHelperText'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { FormControl, Stack } from '@chakra-ui/core'
import { FormLabel } from '../components/FormLabel'
import { P } from '../components/paragraph'
import { useStateValue } from '../utils/state'

export const HowDidItStartForm = props => {
  const [data] = useStateValue()

  const howDidItStart = {
    howDidItStart: '',
    ...data.formData.howDidItStart,
  }

  return (
    <Form
      initialValues={howDidItStart}
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} spacing={6} shouldWrapChildren>
          <Field name="howDidItStart">
            {props => (
              <FormControl>
                <FormLabel htmlFor="howDidItStart">
                  <Trans id="howDidItStart.question1" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="howDidItStart.hint" />
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <P>
            <Trans id="whatHappendPage.nextStep" />
          </P>
          <NextAndCancelButtons>
            <Trans id="whatHappenedPage.nextButton" />
          </NextAndCancelButtons>
        </Stack>
      )}
    />
  )
}

HowDidItStartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
