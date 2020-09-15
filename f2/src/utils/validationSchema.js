const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
const postalCodeRegex = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/

export const phone = () => {
  return phoneRegExp
}

export const postalCode = () => {
  return postalCodeRegex
}
