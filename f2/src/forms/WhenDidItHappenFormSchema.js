import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const whenDidItHappenForm = Yup.object().shape({
  incidentFrequency: Yup.string().required(),
  startDay: yupSchema.daySchema,
  startMonth: yupSchema.monthSchema,
  startYear: yupSchema.yearSchema,
  endDay: yupSchema.daySchema,
  endMonth: yupSchema.monthSchema,
  endYear: yupSchema.yearSchema,
  happenedOnceDay: yupSchema.daySchema,
  happenedOnceMonth: yupSchema.monthSchema,
  happenedOnceYear: yupSchema.yearSchema,
  description: Yup.string(),
})

export const whenDidItHappenFormSchema = () => {
  return whenDidItHappenForm
}
