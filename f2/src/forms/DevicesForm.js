/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Input } from '../components/input'
import { Field } from '../components/Field'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { Well } from '../components/Messages'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'

export const DevicesForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.devicesInfo))
      props.onSubmit(data)
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
          <Field
            name="device"
            label={<Trans id="devicePage.device" />}
            helperText={<Trans id="devicePage.deviceExample" />}
            component={Input}
          />
          <Field
            name="account"
            label={<Trans id="devicePage.account" />}
            helperText={<Trans id="devicePage.accountExample" />}
            component={Input}
          />
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
