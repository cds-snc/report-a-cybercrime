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
    daySchema: Yup.number()
      .typeError('Please enter a number')
      .min(1, 'Please enter a valid day')
      .max(31, 'Please enter a valid day')
      .nullable(true),
    monthSchema: Yup.number()
      .typeError('Please enter a number')
      .min(1, 'Please enter a valid month')
      .max(12, 'Please enter a valid month'),
    yearSchema: Yup.number()
      .typeError('Please enter a number')
      .min(1000, 'Please enter a valid year')
      .max(9999, 'Please enter a valid year'), //Enforce 4 digit entry
  }
}
