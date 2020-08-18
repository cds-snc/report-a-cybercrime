import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const howDidItStartFormSchema = Yup.object().shape({
  howDidTheyReachYou: Yup.array().required(),
  email: yupSchema().emailSchema,
  phone: yupSchema().phoneSchema,
  online: Yup.string(),
  application: Yup.string(),
  others: Yup.string(),
})

export const HowDidItStartFormSchema = () => {
  return howDidItStartFormSchema
}
