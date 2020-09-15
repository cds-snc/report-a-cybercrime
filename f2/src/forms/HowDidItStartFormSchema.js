import * as Yup from 'yup'
import React from 'react'
import { Trans } from '@lingui/macro'
import { yupSchema } from '../utils/yupSchema'

const howDidItStartFormSchema = Yup.object().shape({
  howDidTheyReachYou: Yup.array().required(
    <Trans id="howDidTheyReachYou.error" />,
  ),
  email: yupSchema().emailSchema,
  phone: yupSchema().phoneSchema,
  online: Yup.string(),
  application: Yup.string(),
  others: Yup.string(),
})

export const HowDidItStartFormSchema = () => {
  return howDidItStartFormSchema
}
