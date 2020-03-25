/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { Stack, FormControl } from '@chakra-ui/core'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'
import { Field } from '../components/Field'
import { Input } from '../components/input'

const defaultLocation = {
  postalCode: '',
}

export const LocationAnonymousInfoForm = props => {
  const [data, dispatch] = useStateValue()

  let location
  if (!data.formData.location) {
    dispatch({ type: 'saveFormData', data: { location: defaultLocation } })
    location = defaultLocation
  } else {
    location = {
      ...defaultLocation,
      ...data.formData.location,
    }
  }

  return (
    <Form
      initialValues={location}
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>
          <Field
            name="City"
            label={<Trans id="LocationAnonymousInfoForm.City" />}
            component={Input}
          />
          <Field
            name="Province"
            label={<Trans id="LocationAnonymousInfoForm.province" />}
            component={Input}
          />
          <NextAndCancelButtons
            next={<Trans id="LocationAnonymousInfoForm.nextPage" />}
            button={<Trans id="LocationAnonymousInfoForm.nextButton" />}
          />
        </Stack>
      )}
    />
  )
}

LocationAnonymousInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
