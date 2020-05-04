//import isExists from 'date-fns/isExists'
import isFuture from 'date-fns/isFuture'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import { containsData } from './containsData'

export const validateDate = (y, m, d) => {
  const year = parseInt(y, 10)
  const monthIndex = parseInt(m, 10) - 1 // 0 indexed months
  const day = parseInt(d, 10)
  const date = new Date(year, monthIndex, day)

  let validate = []
  let isYear, isMonth, isDay

  const hasYear = containsData(year)
  const hasMonth = containsData(monthIndex)
  const hasDay = containsData(day)

  // 1. Date must contain a day a month and a year
  // 2. Date must be in the past
  // 3. Field ...X is not valid

  // day is between 1 and the month's last day.
  // Requires a date to validate against.
  // new Date with year and month to prevent date-forwarding (jan 32 == feb 1)
  if (day > getDaysInMonth(new Date(year, monthIndex)) || day < 1)
    isDay = 'notDay'

  // month is between 0 and 11
  if (monthIndex > 11 || monthIndex < 0) isMonth = 'notMonth'

  // is not in the future, while all fields are valid
  !isMonth && !isDay && !isYear && isFuture(date) && validate.push('isFuture')

  //Year is over 1867 :eyes:
  year < 1867 && validate.push('notYear')

  // number of digits in year is 4
  if (y && y.length < 4 && y.length > 0) isYear = 'yearLength'

  // Missing fields these are ONLY ok if no other errors exist
  !hasYear && validate.push('hasNoYear')
  !hasMonth && validate.push('hasNoMonth')
  !hasDay && validate.push('hasNoDay')

  //Remove the missing fields errors only if ALL are missing
  if (!hasYear && !hasMonth && !hasDay)
    validate = validate.filter((error) => !error.includes('hasNo'))

  // Pushing values to validate[]
  isYear && validate.push(isYear)
  isMonth && validate.push(isMonth)
  isDay && validate.push(isDay)

  return validate
}
