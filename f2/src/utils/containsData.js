export const containsData = x => {
  switch (typeof x) {
    case 'string':
      return x !== ''
    case 'object':
      // includes arrays
      return Object.values(x).some(containsData)
    default:
      // numbers, boolean
      return true
  }
}
