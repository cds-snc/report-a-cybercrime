import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const locationInfoFormSchema = Yup.object().shape({
  postCode: yupSchema().postalCodeSchema,
})

export const LocationInfoFormSchema = () => {
  return locationInfoFormSchema
}
