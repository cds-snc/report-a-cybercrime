export const editCheck = (data, doneForms) => {
  if (doneForms) {
    data.edited = true
  }
}

export const removeEditFlags = (data) => {
  Object.keys(data).forEach((key) => {
    delete data[key].edited
  })
}
