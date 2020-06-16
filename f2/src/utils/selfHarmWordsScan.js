// 'use strict'
const unidecode = require('unidecode')
const natural = require('natural')
require('dotenv').config()

const selfHarmString = process.env.SELF_HARM_WORDS || 'agilé, lean, mvp, scrum'
const selfHarmWords = selfHarmString
  .split(',')
  .map((w) => unidecode(w.trim().toLowerCase()))
console.info(`Self harm word list: ${selfHarmWords}`)

natural.PorterStemmer.attach()

const selfHarmWordsScan = (data) => {
  const jsonString = unidecode(JSON.stringify(data).toLowerCase())
  const formTokens = jsonString.tokenizeAndStem()

  //Create object
  const json = JSON.parse(jsonString)
  console.log('')
  console.log('')
  for (var key in json) {
    if (typeof json[key] === 'object') {
      //Get Strings from object
      scanObject(json[key])
    }
    if (typeof json[key] === 'string') {
      //Analyze String
      scanString(json[key])
    }
  }

  console.log(`${JSON.stringify(data, null, 2)}`)
  console.log('')

  scanString(formTokens)

  const wordsUsed = selfHarmWords.filter((w) => {
    const regEx = new RegExp('\\b' + w + '\\b')
    return regEx.test(jsonString)
  })
  return wordsUsed
}

const scanString = (str) => {
  const modifiedStr = str
    .toString()
    .replace(/\r?\n|\r/g, ' ') //Remove newline characters
    .replace(/[^\w\s]|_/g, ' ') //Remove special characters
    .replace(/\s+/g, ' ') //Remove any extra sapaces
    .split(' ') //Break String into array of words(Strings)

  console.log('')
  console.log('')
  console.log(`${modifiedStr}`)
  console.log('')
  console.log('')
}

const scanObject = (obj) => {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      var subObj = obj[key]
      for (var subKey in subObj) {
        if (typeof subObj[subKey] === 'string') {
          scanString(subObj[subKey])
        }
      }
    }
    if (typeof obj[key] === 'string') {
      scanString(obj[key])
    }
  }
}

module.exports = { selfHarmWordsScan }
