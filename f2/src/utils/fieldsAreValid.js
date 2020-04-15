const { formDefaults } = require('../forms/defaultValues')
const flatten = require('flat')

const fieldsAreValid = (fields) => {
  const requiredFields = flatten(formDefaults, { safe: true })
  let retval = true

  // are all the required fields in the submission with the correct type?
  Object.entries(requiredFields).forEach(([field, value]) => {
    if (typeof fields[field] === 'undefined') {
      console.warn(`ERROR: required field ${field} is undefined`)
      retval = false
    } else if (typeof fields[field] !== typeof value) {
      console.warn(`ERROR: field ${field} has an incorrect type`)
      retval = false
    }
  })

  // are there extra fields we're not expecting?
  Object.keys(fields).forEach((field) => {
    if (typeof requiredFields[field] === 'undefined') {
      console.warn(`ERROR: extra field ${field} detected`)
      retval = false
    }
  })

  return retval
}

module.exports = { fieldsAreValid }
