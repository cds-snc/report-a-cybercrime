export const regexDef = () => {
  return {
    phoneRegExp: /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
    postalCodeRegex: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i,
    internationalPhonenumberRegex: /^\d{10,15}$/,
    phoneExtensionRegex: /^\d{1,8}$/,
  }
}
