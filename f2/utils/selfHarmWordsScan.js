// 'use strict'

require('dotenv').config()

// from https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
const removeAccents = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const selfHarmString = process.env.SELF_HARM_WORDS || 'agilé, lean, mvp, scrum'
const selfHarmWords = selfHarmString
  .split(',')
  .map(w => removeAccents(w.trim().toLowerCase()))
console.info(`Self harm word list: ${selfHarmWords}`)

const selfHarmWordsScan = data => {
  const json = removeAccents(JSON.stringify(data).toLowerCase())
  const wordsUsed = selfHarmWords.filter(w => json.includes(w))
  return wordsUsed
}

module.exports = { selfHarmWordsScan }
