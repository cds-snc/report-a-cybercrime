export const editCheck = (data, history) => {
  if (history.location.state && history.location.state.edit) {
    data.edited = true
  }
}

export const removeEditFlags = (data) => {
  Object.keys(data).forEach((key) => {
    delete data[key].edited
  })
}
