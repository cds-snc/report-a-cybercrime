export const formatPostalCode = (s) => {
  if (typeof s === 'string' && s.length > 0) {
    let s2 = s.toUpperCase().replace(/\s/g, '')
    return s2.substring(0, 3) + ' ' + s2.substring(3)
  } else return ''
}
