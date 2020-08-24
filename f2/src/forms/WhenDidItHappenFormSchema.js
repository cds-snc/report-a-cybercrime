import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const dateValidations = {
  DAY: yupSchema().daySchema,
  MONTH: yupSchema().monthSchema,
  YEAR: yupSchema().yearSchema,
}

const validationSelection = (selection, validation) => ({
  is: selection,
  then: validation,
  otherwise: Yup.number().typeError(''),
})

const whenDidItHappenForm = Yup.object().shape({
  incidentFrequency: Yup.string().required('Please make a selection'),
  startDay: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateValidations.DAY),
  ),
  startMonth: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateValidations.MONTH),
  ),
  startYear: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateValidations.YEAR),
  ),
  endDay: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateValidations.DAY),
  ),
  endMonth: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateValidations.MONTH),
  ),
  endYear: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce', dateValidations.YEAR),
  ),
  happenedOnceDay: Yup.number().when(
    'incidentFrequency',
    validationSelection('once', dateValidations.DAY),
  ),
  happenedOnceMonth: Yup.number().when(
    'incidentFrequency',
    validationSelection('once', dateValidations.MONTH),
  ),
  happenedOnceYear: Yup.number().when(
    'incidentFrequency',
    validationSelection('once', dateValidations.YEAR),
  ),
  description: Yup.string(),
})

export const whenDidItHappenFormSchema = () => {
  return whenDidItHappenForm
}
