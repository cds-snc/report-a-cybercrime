import React from 'react'
import { Trans } from '@lingui/macro'
import { formatPhoneNumber } from '../utils/formatPhoneNumber'
import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const contactInfoFormValidation = Yup.object().shape({
  email: yupSchema().emailSchema,
  phone: yupSchema().phoneSchema,
  extension: yupSchema().phoneExtensionSchema,
})

const contactFormOptions = {
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
  extension: {
    name: 'extension',
    value: 'extension',
    id: 'enterContactDetails-Extension',
    label: <Trans id="contactinfoPage.phoneExtension" />,
    errorMessage: <Trans id="contactinfoForm.phoneExtension.warning" />,
  },
}

const createErrorSummary = (errors) => {
  const errorSummary = {}

  if (errors.fullName) {
    errorSummary['fullName'] = {
      label: contactFormOptions.fullName.label,
      message: contactFormOptions.fullName.errorMessage,
    }
  }

  if (errors.email) {
    errorSummary['email'] = {
      label: contactFormOptions.email.label,
      message: contactFormOptions.email.errorMessage,
    }
  }

  if (errors.phone) {
    errorSummary['phone'] = {
      label: contactFormOptions.phone.label,
      message: contactFormOptions.phone.errorMessage,
    }
  }

  if (errors.extension) {
    errorSummary['extension'] = {
      label: contactFormOptions.extension.label,
      message: contactFormOptions.extension.errorMessage,
    }
  }

  if (errors.emailOrPhone) {
    errorSummary['emailOrPhone'] = {
      label: <Trans id="contactinfoPage.emailORphone" />,
      message: <Trans id="contactinfoForm.emailORphone.warning" />,
    }
  }

  return errorSummary
}

const onSubmitValidation = async (values) => {
  const errors = {}

  if (!values.fullName || values.fullName === '') {
    errors['fullName'] = true
  }

  if (values.email) {
    await contactInfoFormValidation
      .validate({ email: values.email })
      .catch((err) => {
        errors['email'] = true
      })
  }

  if (values.phone) {
    await contactInfoFormValidation
      .validate({ phone: values.phone })
      .catch((err) => {
        errors['phone'] = true
      })

    values.phone = errors['phone']
      ? values.phone
      : formatPhoneNumber(values.phone)
  }

  if (values.extension) {
    await contactInfoFormValidation
      .validate({ extension: values.extension })
      .catch((err) => {
        errors['extension'] = true
      })
  }

  if (!values.email && !values.phone) {
    errors['emailOrPhone'] = true
  }

  return errors
}

export const ContactInfoFormSchema = {
  CONTACT_INFO: contactFormOptions,
  ON_SUBMIT_VALIDATION: onSubmitValidation,
  CREATE_ERROR_SUMMARY: createErrorSummary,
}
