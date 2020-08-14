const Yup = require('yup')
import { yupSchema } from '../utils/yupSchema'

const howDidItStartFormSchema = Yup.object().shape({
  howDidTheyReachYou: Yup.array().required(),
  email: Yup.string(),
  phone: yupSchema().phoneSchema,
  online: Yup.string(),
  application: Yup.string(),
  others: Yup.string(),
})

export const HowDidItStartFormSchema = () => {
  return howDidItStartFormSchema
}
