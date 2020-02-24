// 'use strict'
const unidecode = require('unidecode')
require('dotenv').config()

const selfHarmString = process.env.SELF_HARM_WORDS || 'agilé, lean, mvp, scrum'
const selfHarmWords = selfHarmString
  .split(',')
  .map(w => unidecode(w.trim().toLowerCase()))
console.info(`Self harm word list: ${selfHarmWords}`)

const selfHarmWordsScan = data => {
  const json = unidecode(JSON.stringify(data).toLowerCase())
  const wordsUsed = selfHarmWords.filter(w => json.includes(w))
  return wordsUsed
}

module.exports = { selfHarmWordsScan }
