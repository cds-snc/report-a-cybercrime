// 'use strict'
const unidecode = require('unidecode')
require('dotenv').config()

const selfHarmString = process.env.SELF_HARM_WORDS || 'agilé, lean, mvp, scrum'
const selfHarmWords = selfHarmString
  .split(',')
  .map(w => unidecode(w.trim().toLowerCase()))
console.info(`Self harm word list: ${selfHarmWords}`)

const selfHarmWordsScan = data => {

  console.log('')
  console.log('')
  console.log(data)
  console.log('')
  console.log('')

  const formattedData = unidecode(data)
    .toLowerCase()
    .replace(/\r?\n|\r/g," ")   //Remove newline characters
    .replace(/[^\w\s]|_/g," ")  //Remove special characters
    .replace(/\s+/g, " ")       //Remove any extra sapaces
    .split(" ")                 //Break String into array of words(Strings)

  const wordsUsed = selfHarmWords.filter(w => formattedData.includes(w))
  return wordsUsed
}

module.exports = { selfHarmWordsScan }
