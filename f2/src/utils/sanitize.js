const sanitizeHtml = require('sanitize-html')

const sanitize = (input) =>
  sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
  })

module.exports = { sanitize }
