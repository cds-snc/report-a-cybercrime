import * as Yup from 'yup'
import { yupSchema } from '../utils/yupSchema'

const validationSelection = (selection) => ({
  is: selection,
  then: Yup.number().required(),
})

const whenDidItHappenForm = Yup.object().shape({
  incidentFrequency: Yup.string().required('Please make a selection'),
  startDay: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce'),
  ),
  startMonth: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce'),
  ),
  startYear: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce'),
  ),
  endDay: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce'),
  ),
  endMonth: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce'),
  ),
  endYear: Yup.number().when(
    'incidentFrequency',
    validationSelection('moreThanOnce'),
  ),
  happenedOnceDay: Yup.number().when(
    'incidentFrequency',
    validationSelection('once'),
  ),
  happenedOnceMonth: Yup.number().when(
    'incidentFrequency',
    validationSelection('once'),
  ),
  happenedOnceYear: Yup.number().when(
    'incidentFrequency',
    validationSelection('once'),
  ),
  description: Yup.string(),
})

export const whenDidItHappenFormSchema = () => {
  return whenDidItHappenForm
}
