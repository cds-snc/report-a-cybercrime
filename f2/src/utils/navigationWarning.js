const naviagationWarning = (e) => {
  e.preventDefault()
  e.returnValue = ''
}

//Add event listener to warn user if they navigate away from page.
export const setBeforeUnloadWarning = () => {
  window.addEventListener('beforeunload', naviagationWarning)
}

export const removeBeforeUnloadWarning = () => {
  //Remove the event listener as the user has submitted and will not lose data by navigating away.
  window.removeEventListener('beforeunload', naviagationWarning)
}
