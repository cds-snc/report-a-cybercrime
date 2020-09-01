import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const contactInfoFormSchema = Yup.object().shape({
  //contactInfo: Yup.array().required(),
  fullName: Yup.string().required('Please enter full name'),
  email: yupSchema().emailSchema,
  phone: yupSchema().phoneSchema,
})

export const ContactInfoFormSchema = () => {
  return contactInfoFormSchema
}
