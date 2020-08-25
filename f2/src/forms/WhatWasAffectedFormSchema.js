import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const whatWasAffectedFormSchema = Yup.object().shape({
  affectedOptions: Yup.array().required(),
})

export const WhatWasAffectedFormSchema = () => {
  return whatWasAffectedFormSchema
}
