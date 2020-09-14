import * as Yup from 'yup'

const whatWasAffectedFormSchema = Yup.object().shape({
  affectedOptions: Yup.array().required(),
})

export const WhatWasAffectedFormSchema = () => {
  return whatWasAffectedFormSchema
}
