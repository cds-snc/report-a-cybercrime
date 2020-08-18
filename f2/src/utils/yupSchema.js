import React from 'react'
import * as Yup from 'yup'
import { regexDef } from './regex'
import { Trans } from '@lingui/macro'

export const yupSchema = () => {
  return {
    phoneSchema: Yup.string().matches(regexDef().phoneRegExp, {
      excludeEmptyString: true,
      message: 'Please enter a valid phone number',
    }),
    emailSchema: Yup.string().email(
      <Trans id="contactinfoForm.email.warning" />,
    ),
  }
}
