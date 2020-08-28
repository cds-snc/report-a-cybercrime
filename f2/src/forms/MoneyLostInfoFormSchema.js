import * as Yup from 'yup'
//import { yupSchema } from '../utils/yupSchema'

const moneyLostInfoFormSchema = Yup.object().shape({})

export const MoneyLostInfoFormSchema = () => {
  return moneyLostInfoFormSchema
}
