import React from 'react'
import * as Yup from 'yup'
import { regexDef } from './regex'
import { Trans } from '@lingui/macro'

export const yupSchema = () => {
  return {
    // nameSchema: Yup.string().name()(
    //   <Trans id="contactinfoForm.name.warning" />,
    //   //excludeEmptyString: true,
    //   //message: 'Please enter a valid full name',
    // ),
    phoneSchema: Yup.string().matches(regexDef().phoneRegExp, {
      excludeEmptyString: true,
      message: 'Please enter a valid phone number',
    }),
    emailSchema: Yup.string().email(
      <Trans id="contactinfoForm.email.warning" />,
    ),
    dateSchema: {
      DAY: Yup.number().min(1).max(31),
      MONTH: Yup.number().min(1).max(12),
      YEAR: Yup.number().min(1000).max(9999), //Enforce 4 digit entry
    },
  }
}
