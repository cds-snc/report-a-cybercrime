module.exports = {
  formatPhoneNumber(s) {
    if (!s || s === '') return ''
    const digitsOnly = s.replace(/\D/g, '')
    if (digitsOnly.length !== 10) return s
    const areaCode = digitsOnly.substring(0, 3)
    const prefix = digitsOnly.substring(3, 6)
    const lineNumber = digitsOnly.substring(6, 10)
    return `(${areaCode}) ${prefix}-${lineNumber}`
  },
}
