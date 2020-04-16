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
import { useStateValue } from '../utils/state'
import { Well } from '../components/Messages'
import { areFieldsValid } from '../utils/areFieldsValid'
import { formDefaults } from './defaultValues'

export const DevicesForm = (props) => {
  const localOnSubmit = (data) => {
    if (areFieldsValid(data, formDefaults.devicesInfo)) props.onSubmit(data)
  }

  const [data] = useStateValue()
  const devicesInfo = {
    ...formDefaults.devicesInfo,
    ...data.formData.devicesInfo,
  }

  return (
    <Form
      initialValues={devicesInfo}
      onSubmit={localOnSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>
          <Field name="device">
            {(props) => (
              <FormControl>
                <FormLabel htmlFor="device">
                  <Trans id="devicePage.device" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="devicePage.deviceExample">
                    <VisuallyHidden as="span" />
                  </Trans>
                </FormHelperText>
                <TextInput
                  id="device"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          <Field name="account">
            {(props) => (
              <FormControl>
                <FormLabel htmlFor="account">
                  <Trans id="devicePage.account" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="devicePage.accountExample">
                    <VisuallyHidden as="span" />
                  </Trans>
                </FormHelperText>
                <TextInput
                  id="account"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          <Field name="devicesTellUsMore">
            {(props) => (
              <FormControl>
                <FormLabel htmlFor="devicesTellUsMore">
                  <Trans id="devicePage.devicesTellUsMore" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="devicePage.tellUsMoreExample" />
                </FormHelperText>
                <TextArea
                  id="devicesTellUsMore"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          <Well variantColor="blue">
            <Trans id="devicePage.tip" />
          </Well>
          <NextAndCancelButtons
            next={<Trans id="devicePage.nextPage" />}
            button={<Trans id="devicePage.nextButton" />}
          />
        </Stack>
      )}
    />
  )
}
DevicesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
