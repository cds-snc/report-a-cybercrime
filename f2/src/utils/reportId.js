const generate = require('nanoid/generate')

// removed a few letters that might be misread or might lead randomly to inappropriate words in the id
// letters removed: i, j, l, o, u, v
export const generateReportId = () => {
  const alphabet = '0123456789abcdefghkmnpqrstwxyz'
  return 'NCFRS-' + generate(alphabet, 10) //=> "7w6nzgcb87"
}
