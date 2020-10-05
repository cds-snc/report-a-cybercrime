import React from 'react'
import { Trans } from '@lingui/macro'
import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

/*Yup.addMethod(Yup.object, 'phoneOrEmail', function(phone, email) {
  return this.test({
    name: 'phoneOrEmail',
    message: 'Phone or email required',
    params: {values: [phone, email]},
    exclusive: true,
    test: value => {
      console.log(value)
      console.log(value.phone || value.email)
      return value.phone || value.email
    }
  })
})*/

const emailOrPhoneTest = {
  is: (val) => val === undefined,
  then: Yup.string().test('phoneTest', function (value) {
    return value
  }),
}

const contactInfoFormValidation = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  email: yupSchema().emailSchema.required('Email is required'),
  phone: yupSchema().phoneSchema.required('Phone is required'),
  emailOrPhone: Yup.mixed().when(['email', 'phone']),
})

const contactInfoFYIFormValidation = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  email: yupSchema().emailSchema,
  phone: yupSchema().phoneSchema.when('email', {
    is: (val) => val === undefined,
    then: Yup.string().test('phoneTest', function (value) {
      return value
    }),
  }),
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

  return errorSummary
}

export const ContactInfoFormSchema = {
  CONTACT_INFO: contactFormOptions,
  ON_SUBMIT_VALIDATION: contactInfoFormValidation,
  ON_SUBMIT_FYI_VALIDATION: contactInfoFYIFormValidation,
  CREATE_ERROR_SUMMARY: createErrorSummary,
}
