/** @jsx jsx */
import React from 'react'
import addrs from 'email-addresses'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { ErrorSummary } from '../components/ErrorSummary'
import { Input } from '../components/input'
import { Field } from '../components/Field'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formatPhoneNumber } from '../utils/formatPhoneNumber'
import { formDefaults } from './defaultValues'
import { containsData } from '../utils/containsData'

const validate = (values) => {
  const errors = {}

  // build up a bool that returns false if key does not exist in values or if containsData(key) returns false
  const phone = 'phone' in values && containsData(values.phone)
  const email = 'email' in values && containsData(values.email)

  //condition for an error to occur: append a lingui id to the list of error

  if (!values.fullName || values.fullName === '')
    errors.fullName = 'contactinfoForm.fullName.warning'

  //!(email || phone) If either phone or email is not false
  if (!(email || phone) && addrs(values.email) == null) {
    errors.email = 'contactinfoForm.email.warning'
  }

  // from https://www.w3resource.com/javascript/form/phone-no-validation.php
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  if (!(email || phone) && !new RegExp(phoneRegex).test(values.phone)) {
    errors.phone = 'contactinfoForm.phone.warning'
  }

  console.log(values, errors, phone, email)

  return errors
}

export const ContactInfoForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.contactInfo))
      props.onSubmit({ ...data, phone: formatPhoneNumber(data.phone) })
  }

  const [data] = useStateValue()
  const contactInfo = {
    ...formDefaults.contactInfo,
    ...data.formData.contactInfo,
  }

  return (
    <React.Fragment>
      <Form
        initialValues={contactInfo}
        onSubmit={localOnSubmit}
        validate={validate}
        render={({
          handleSubmit,
          values,
          errors,
          submitFailed,
          hasValidationErrors,
        }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            {submitFailed && hasValidationErrors ? (
              <ErrorSummary>
                <Trans id="contactinfoPage.hasValidationErrors" />
              </ErrorSummary>
            ) : null}
            <Field
              name="fullName"
              label={<Trans id="contactinfoPage.fullName" />}
              errorMessage={<Trans id="contactinfoForm.fullName.warning" />}
              component={Input}
              required
            />

            <Field
              name="email"
              label={<Trans id="contactinfoPage.emailAddress" />}
              errorMessage={<Trans id="contactinfoForm.email.warning" />}
              component={Input}
              required
            />
            <Field
              name="phone"
              label={<Trans id="contactinfoPage.phoneNumber" />}
              helperText={<Trans id="contactinfoForm.phone.warning" />}
              errorMessage={<Trans id="contactinfoForm.phone.warning" />}
              component={Input}
              required
            />
            <NextAndCancelButtons
              next={<Trans id="contactinfoPage.nextInfo" />}
              button={<Trans id="contactinfoPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

ContactInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
