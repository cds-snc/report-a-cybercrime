/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextArea } from '../components/text-area'
import { Stack, FormControl, VisuallyHidden } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'
import { Input } from '../components/input'

export const BusinessInfoForm = ({ onSubmit }) => {
  const [data] = useStateValue()
  let { businessInfo } = data.formData
  businessInfo = {
    business: '',
    ...businessInfo,
  }
  return (
    <React.Fragment>
      <Form
        initialValues={businessInfo}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Field
              name="nameOfBusiness"
              label={<Trans id="businessPage.nameOfBusiness" />}
              component={Input}
            />

            <NextAndCancelButtons
              next={<Trans id="businessInfoPage.nextPage" />}
              button={<Trans id="businessInfoPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

BusinessInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
