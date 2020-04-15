const missingFields = (data) => {
  let missing = []
  let sections = ['evidence', 'contactInfo']

  sections.forEach((section) => {
    if (!data[section]) {
      missing.push(section)
    }
  })
  return missing
}

module.exports = { missingFields }
