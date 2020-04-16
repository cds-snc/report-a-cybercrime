const areFieldsValid = (data, defaults) => {
  let valid = true
  Object.keys(data).forEach((field) => {
    if (Object.keys(defaults).indexOf(field) === -1) {
      valid = false
      console.log(
        `ERROR: field ${field} not in defaults ${Object.keys(defaults)}`,
      )
    }
  })
  return valid
}

module.exports = { areFieldsValid }
