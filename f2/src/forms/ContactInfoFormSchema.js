import React from 'react'
import { Trans } from '@lingui/macro'
import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const contactInfoFormValidation = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  email: yupSchema().emailSchema.required('Email is required'),
  phone: yupSchema().phoneSchema.required('Phone is required'),
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

  const enterContactDetails = errors.enterContactDetails
  const fullName = errors.fullName
  const email = errors.email
  const phone = errors.phone

  if (fullName) {
    errorSummary['fullName'] = {
      label: contactFormOptions.fullName.label,
      message: contactFormOptions.fullName.errorMessage,
    }
  }

  if (email) {
    errorSummary['email'] = {
      label: contactFormOptions.email.label,
      message: contactFormOptions.email.errorMessage,
    }
  }

  if (phone) {
    errorSummary['phone'] = {
      label: contactFormOptions.phone.label,
      message: contactFormOptions.phone.errorMessage,
    }
  }

  if (enterContactDetails) {
    errorSummary['enterContactDetails'] = {
      label: contactFormOptions.enterContactDetails.label,
      message: contactFormOptions.enterContactDetails.errorMessage,
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
