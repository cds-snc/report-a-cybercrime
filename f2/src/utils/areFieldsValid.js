const areFieldsValid = (data, defaults) => {
  const valid = !Object.keys(data).some(
    (field) => Object.keys(defaults).indexOf(field) === -1,
  )
  return valid
}

module.exports = { areFieldsValid }
