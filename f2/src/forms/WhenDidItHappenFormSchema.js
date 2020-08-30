import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const { dateSchema } = yupSchema()

const validationSelection = (selection, validation) => ({
  is: selection,
  then: validation,
  otherwise: Yup.number().typeError(''),
})

const whenDidItHappenForm = Yup.object().shape({
  incidentFrequency: Yup.string().required('Please make a selection'),
  startDay: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateSchema.DAY),
  ),
  startMonth: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateSchema.MONTH),
  ),
  startYear: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateSchema.YEAR),
  ),
  endDay: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateSchema.DAY),
  ),
  endMonth: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateSchema.MONTH),
  ),
  endYear: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateSchema.YEAR),
  ),
  happenedOnceDay: Yup.number().when(
    'incidentFrequency',
    validationSelection('once', dateSchema.DAY),
  ),
  happenedOnceMonth: Yup.number().when(
    'incidentFrequency',
    validationSelection('once', dateSchema.MONTH),
  ),
  happenedOnceYear: Yup.number().when(
    'incidentFrequency',
    validationSelection('once', dateSchema.YEAR),
  ),
  description: Yup.string(),
})

export const whenDidItHappenFormSchema = () => {
  return whenDidItHappenForm
}
