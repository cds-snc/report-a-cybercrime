import React from 'react'
import { Trans } from '@lingui/macro'
import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const contactInfoFormValidation = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  email: Yup.string().when('phone', {
    is: (val) => val !== '',
    then: yupSchema().emailSchema.required('Email is required'),
    otherwise: Yup.string(),
  }),
  phone: Yup.string().when('email', {
    is: (val) => val !== '',
    then: yupSchema().phoneSchema.required('Phone is required'),
    otherwise: Yup.string(),
  }),
})

const contactInfoFYIFormValidation = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  email: yupSchema().emailSchema,
  phone: yupSchema().phoneSchema,
})

const contactFormOptions = {
  enterContactDetails: {
    label: <Trans id="contactinfoPage.hasValidationErrors" />,
    errorMessage: <Trans id="contactinfoPage.hasValidationErrors" />,
  },
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
  const emailORphone = errors.email || errors.phone

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

export const ContactInfoFormSchema = {
  CONTACT_INFO: contactFormOptions,
  ON_SUBMIT_VALIDATION: contactInfoFormValidation,
  ON_SUBMIT_FYI_VALIDATION: contactInfoFYIFormValidation,
  CREATE_ERROR_SUMMARY: createErrorSummary,
}
