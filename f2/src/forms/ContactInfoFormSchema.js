import * as Yup from 'yup'
import React from 'react'
import { Trans } from '@lingui/macro'
import { yupSchema } from '../utils/yupSchema'

const contactInfoFormSchema = Yup.object().shape({
  fullName: Yup.string().required(
    <Trans id="contactinfoForm.fullName.warning" />,
  ),
  email: yupSchema().emailSchema,
  phone: yupSchema().phoneSchema,
})

export const ContactInfoFormSchema = () => {
  return contactInfoFormSchema
}
