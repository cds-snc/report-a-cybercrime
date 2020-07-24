const Yup = require('yup')

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const postalCodeRegex = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/

//Validation object, defines rules used to validation form data
const validationSchema = Yup.object()
  .shape({
    email: Yup.boolean(),
    phone: Yup.boolean(),
    web: Yup.boolean(),
    software: Yup.boolean(),
    other: Yup.boolean(),
  })
  .test('How Did It Start Test', null, (value) => {
    console.log(value)
    if (value.email | value.phone | value.web | value.software | value.other) {
      return true
    }

    console.log('Error')

    return false
  })

const getSchema = () => {
  //Expose validation object.
  return validationSchema
}

const getHowDidItStartSchema = () => {
  return Yup.reach(validationSchema, 'howDidItStart')
}

module.exports = { getSchema, getHowDidItStartSchema }
