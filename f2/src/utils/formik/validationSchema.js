const Yup = require('yup')

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const postalCodeRegex = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/

//Validation object, defines rules used to validation form data
const validationSchema = Yup.object().shape({
  howDidItStart: Yup.object().shape({
    howDidTheyReachYou: Yup.array().required(),
    email: Yup.string(),
    phone: Yup.string(),
    online: Yup.string(),
    application: Yup.string(),
    others: Yup.string(),
  }),
})

const getSchema = () => {
  //Expose validation object.
  return validationSchema
}

const getHowDidItStartSchema = () => {
  return Yup.reach(validationSchema, 'howDidItStart')
}

module.exports = { getSchema, getHowDidItStartSchema }
