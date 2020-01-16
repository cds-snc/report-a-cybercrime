/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextArea } from '../components/text-area'
import { Stack, FormControl, VisuallyHidden } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'

export const BusinessInfoForm = props => {
  const localOnSubmit = data => {
    props.onSubmit(data)
  }

  const [data] = useStateValue()
  let { businessInfo } = data.formData
  businessInfo = {
    business: '',
    ...businessInfo,
  }
  return (
    <Form
      initialValues={businessInfo}
      onSubmit={data => localOnSubmit(data)}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>
          <Field name="business">
            {props => (
              <FormControl>
                <FormLabel htmlFor="business">
                  <Trans id="businessPage.business" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="businessPage.businessExample">
                    <VisuallyHidden as="span" />
                  </Trans>
                </FormHelperText>
                <TextArea
                  id="business"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>

          <NextAndCancelButtons
            next={<Trans id="businessInfoPage.nextPage" />}
            button={<Trans id="businessInfoPage.nextButton" />}
          />
        </Stack>
      )}
    />
  )
}

BusinessInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
