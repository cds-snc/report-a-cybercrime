/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { Stack, FormControl } from '@chakra-ui/core'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'

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
          <Field name="City">
            {props => (
              <FormControl>
                <FormLabel htmlFor="City">
                  <Trans id="LocationAnonymousInfoForm.City" />
                </FormLabel>
                <TextInput
                  id="City"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          <Field name="province">
            {props => (
              <FormControl>
                <FormLabel htmlFor="province">
                  <Trans id="LocationAnonymousInfoForm.province" />
                </FormLabel>
                <TextInput
                  id="province"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
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
