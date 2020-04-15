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

export const DevicesForm = (props) => {
  const localOnSubmit = (data) => {
    props.onSubmit(data)
  }

  const [data] = useStateValue()
  let { devicesInfo } = data.formData
  devicesInfo = {
    ...devicesInfo,
  }
  return (
    <Form
      initialValues={devicesInfo}
      onSubmit={(data) => localOnSubmit(data)}
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
