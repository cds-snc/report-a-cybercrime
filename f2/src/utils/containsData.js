export const containsData = (x) => {
  switch (typeof x) {
    case 'string':
      return x !== ''
    case 'object':
      // includes arrays
      return Object.values(x).some(containsData)
    case 'number':
      return !isNaN(x)
    default:
      // numbers, boolean
      return true
  }
}
