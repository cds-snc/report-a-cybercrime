/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { TextArea } from '../components/text-area'
import { Stack, FormControl, VisuallyHidden } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { P } from '../components/paragraph'

export const DevicesForm = ({ onSubmit }) => (
  <Form
    initialValues={{}}
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>
        <Field name="deviceOrAccount">
          {props => (
            <FormControl>
              <FormLabel htmlFor="deviceOrAccount">
                <Trans id="devicePage.deviceOrAccount" />
              </FormLabel>
              <FormHelperText>
                <Trans id="devicePage.deviceOrAccountExample">
                  <VisuallyHidden as="span" />
                </Trans>
              </FormHelperText>
              <TextInput
                id="deviceOrAccount"
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
              />
            </FormControl>
          )}
        </Field>

        <Field name="devicesTellUsMore">
          {props => (
            <FormControl>
              <FormLabel htmlFor="devicesTellUsMore">
                <Trans id="devicePage.devicesTellUsMore" />
              </FormLabel>
              <TextArea
                id="devicesTellUsMore"
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
              />
            </FormControl>
          )}
        </Field>
        <P>
          <Trans id="devicePage.nextPage" />
        </P>

        <NextAndCancelButtons>
          <Trans id="devicePage.nextButton" />
        </NextAndCancelButtons>
      </Stack>
    )}
  />
)

DevicesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
