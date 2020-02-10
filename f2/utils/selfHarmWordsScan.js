// 'use strict'

const selfHarmWords = 'agile, lean, mvp, scrum'.split(',').map(w => w.trim())

// from https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
const removeAccents = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const selfHarmWordsScan = data => {
  const json = removeAccents(JSON.stringify(data).toLowerCase())
  const wordsUsed = selfHarmWords.filter(w => json.includes(w))
  return wordsUsed
}

module.exports = { selfHarmWordsScan }
