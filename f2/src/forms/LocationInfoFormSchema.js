import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const locationInfoFormSchema = Yup.object().shape({
  postCode: yupSchema().postCodeSchema,
})

export const LocationInfoFormSchema = () => {
  return locationInfoFormSchema
}
