import React from 'react'
import * as Yup from 'yup'
import { Trans } from '@lingui/macro'

const privacyConsentInfoFormSchema = Yup.object().shape({
  consentOptions: Yup.string().required(
    <Trans id="privacyConsentInfoForm.hasValidationErrors" />,
  ),
})

export const PrivacyConsentInfoFormSchema = () => {
  return privacyConsentInfoFormSchema
}
