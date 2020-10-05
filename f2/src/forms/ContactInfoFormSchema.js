import React from 'react'
import { Trans } from '@lingui/macro'
import addrs from 'git checkout'
import { formatPhoneNumber } from '../utils/formatPhoneNumber'

const contactFormOptions = {
  emailORphone: {
    name: 'emailORphone',
    value: 'emailORphone',
    id: 'enterContactDetails-emailORphone',
    label: <Trans id="contactinfoPage.emailORphone" />,
    errorMessage: <Trans id="contactinfoForm.emailORphone.warning" />,
  },
  fullName: {
    name: 'fullName',
    value: 'fullName',
    id: 'enterContactDetails-Fullname',
    label: <Trans id="contactinfoPage.fullName" />,
    errorMessage: <Trans id="contactinfoForm.fullName.warning" />,
  },
  email: {
    name: 'email',
    value: 'email',
    id: 'enterContactDetails-Email',
    label: <Trans id="contactinfoPage.emailAddress" />,
    errorMessage: <Trans id="contactinfoForm.email.warning" />,
  },
  phone: {
    name: 'phone',
    value: 'phone',
    id: 'enterContactDetails-Phone',
    label: <Trans id="contactinfoPage.phoneNumber" />,
    errorMessage: <Trans id="contactinfoForm.phone.warning" />,
  },
}

const createErrorSummary = (errors) => {
  const errorSummary = {}

  const fullName = errors.fullName
  const emailORphone = errors.email && errors.phone

  if (fullName) {
    errorSummary['fullName'] = {
      label: contactFormOptions.fullName.label,
      message: contactFormOptions.fullName.errorMessage,
    }
  }

  if (emailORphone) {
    errorSummary['emailORphone'] = {
      label: contactFormOptions.emailORphone.label,
      message: contactFormOptions.emailORphone.errorMessage,
    }
  }

  return errorSummary
}

const fyiValidate = (values) => {
  const errors = {}
  const fields = {}

  if (values.email && !addrs(values.email)) {
    fields['email'] = true
    errors['fields'] = fields
  }
  return errors
}

const onSubmitValidation = (values) => {
  const errors = {}
  const fields = {}

  if (!values.fullName || values.fullName === '') {
    fields['fullName'] = true
    errors['fields'] = fields
  }

  if (
    !addrs(values.email) &&
    (!values.phone || !formatPhoneNumber(values.phone))
  ) {
    fields['email'] = true
    fields['phone'] = true
    errors['fields'] = fields
  }

  if (!values.fullName && !values.email && !values.phone) {
    fields['enterContactDetails'] = true
    errors['fields'] = fields
  }

  values.phone = formatPhoneNumber(values.phone)

  return errors
}

export const ContactInfoFormSchema = {
  CONTACT_INFO: contactFormOptions,
  ON_SUBMIT_VALIDATION: onSubmitValidation,
  ON_SUBMIT_FYI_VALIDATION: fyiValidate,
  CREATE_ERROR_SUMMARY: createErrorSummary,
}
