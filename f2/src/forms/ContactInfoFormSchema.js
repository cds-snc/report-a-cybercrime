import * as Yup from 'yup'
import addrs from 'email-addresses'
import React from 'react'
import { Trans } from '@lingui/macro'

const contactFormOptions = [
  {
    name: 'fullName',
    label: <Trans id="contactinfoPage.fullName" />,
    helpText: <Trans id="contactinfoForm.fullName.warning" />,
  },
  {
    name: 'email',
    label: <Trans id="contactinfoPage.emailAddress" />,
    helpText: <Trans id="contactinfoForm.email.warning" />,
  },
  {
    name: 'phone',
    label: <Trans id="contactinfoPage.phoneNumber" />,
    helpText: <Trans id="contactinfoForm.phone.warning" />,
  },
]

const createErrorSummary = (errors) => {
  const errorSummary = {}
  if (errors.fullName) {
    errorSummary['fullName'] = {
      label: <Trans id="contactinfoForm.fullName.warning" />,
      message: <Trans id="contactinfoForm.fullName.warning" />,
    }
  }
  return errorSummary
}

const onSubmitValidation = (values) => {
  const errors = {}
  const fields = {}

  if (!values.fullName || values.fullName === '') {
    errors.fullName = 'contactinfoForm.fullName.warning'
    fields['fullName'] = true
    errors['fields'] = fields
  }

  //!(email || phone) If either phone or email is not false
  if (!addrs(values.email)) {
    errors.email = 'contactinfoForm.email.warning'
  }

  if (!values.phone) {
    errors.phone = 'contactinfoForm.phone.warning'
  }

  return errors
}

export const ContactInfoFormSchema = {
  //return contactInfoFormSchema
  CONTACT_INFO: contactFormOptions,
  ON_SUBMIT_VALIDATION: onSubmitValidation,
  CREATE_ERROR_SUMMARY: createErrorSummary,
}
