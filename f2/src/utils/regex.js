export const regexDef = () => {
  return {
    phoneRegExp: /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
    postalCodeRegex: /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/,
  }
}
