const generate = require('nanoid/generate')

module.exports = {
  generateSessionId() {
    const alphabet = '0123456789abcdefghkmnpqrstwxyz'
    const length = 11
    return 'JSESSION-' + generate(alphabet, length)
  },
}
