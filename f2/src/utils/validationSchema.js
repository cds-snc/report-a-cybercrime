const Yup = require('yup')

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const postalCodeRegex = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/

//Validation object, defines rules used to validation form data
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*Names must have at least 2 characters')
    .max(100, "*Names can't be longer than 100 characters")
    .required('*Name is required'),
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(100, '*Email must be less than 100 characters')
    .required('*Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, '*Phone number is not valid')
    .required('*Phone number required'),
  postalCode: Yup.string()
    .matches(postalCodeRegex, '*Postal code is not valid')
    .required('*Postal code required'),
})

const getSchema = () => {
  //Expose validation object.
  return validationSchema
}

module.exports = { getSchema }
