const areFieldsValid = (data, defaults) => {
  const valid = !Object.keys(data).some(
    (field) => Object.keys(defaults).indexOf(field) === -1,
  )

  console.log(Object.keys(data))
  console.log(Object.keys(defaults))
  console.log({ valid })

  return valid
}

module.exports = { areFieldsValid }
