/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { Stack, FormControl, VisuallyHidden } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'
import { P } from '../components/paragraph'
import { Field as OurField } from '../components/Field'

export const LocationInfoForm = props => {
  const [data] = useStateValue()
  const location = {
    location: '',
    ...data.formData.location,
  }

  return (
    <Form
      initialValues={location}
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>
          {/** Testing the Field component */}
          <OurField
            id="test"
            label="This is the label"
            helpText="This is the help text"
          />
          {/** compared to the more verbose way of doing it */}
          <Field name="postalCode">
            {props => (
              <FormControl>
                <FormLabel htmlFor="postalCode">
                  <Trans id="locationinfoPage.postalCode" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="locationinfoPage.postalCodeExample">
                    <VisuallyHidden as="span" />
                  </Trans>
                </FormHelperText>
                <TextInput
                  id="postalCode"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          <P>
            <Trans id="locationinfoPage.or" />
          </P>
          <Field name="cityTown">
            {props => (
              <FormControl>
                <FormLabel htmlFor="cityTown">
                  <Trans id="locationinfoPage.cityTown" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="locationinfoPage.cityTownExample">
                    <VisuallyHidden as="span" />
                  </Trans>
                </FormHelperText>
                <TextInput
                  id="cityTown"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          <NextAndCancelButtons
            next={<Trans id="locationinfoPage.nextPage" />}
            button={<Trans id="locationinfoPage.nextButton" />}
          />
        </Stack>
      )}
    />
  )
}

LocationInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
