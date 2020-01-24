var fs = require('fs')

const LinguiDataFails = (data, file) => {
  let returnValue = false
  for (const [key, value] of Object.entries(data)) {
    // "plural" auto-generates keys with { in them
    if (key != '' && !key.includes('{') && (key === value || value === '')) {
      console.log(`Missing Translation in ${file}: ${key}`)
      returnValue = true
    }
  }
  return returnValue
}

let linguiFr = JSON.parse(fs.readFileSync('locales/fr.json'))
let linguiEn = JSON.parse(fs.readFileSync('locales/en.json'))

let linguiFails = false

linguiFails = linguiFails || LinguiDataFails(linguiFr, 'fr.json')
linguiFails = linguiFails || LinguiDataFails(linguiEn, 'en.json')

if (linguiFails) {
  throw new Error('Lingui check failed')
} else {
  console.log('Lingui check passed')
}
