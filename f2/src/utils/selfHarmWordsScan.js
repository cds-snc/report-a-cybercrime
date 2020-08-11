// 'use strict'
const unidecode = require('unidecode')
const natural = require('natural')
require('dotenv').config()
const { getLogger } = require('./winstonLogger')

const logger = getLogger(__filename)

const selfHarmString = process.env.SELF_HARM_WORDS || 'agilé, lean, mvp, scrum'
const selfHarmWords = selfHarmString.split(',')

logger.info(`Self harm word list: ${selfHarmWords}`)

//Scan form data for self harm key words.
const selfHarmWordsScan = (data) => {
  try {
    //Patches stem() and tokenizeAndStem() to String as a shortcut to PorterStemmer.stem(token)
    if (data.language === 'fr') {
      natural.PorterStemmerFr.attach()
    } else {
      natural.PorterStemmer.attach()
    }

    let keyWordMatch = []

    for (let key in data) {
      if (typeof data[key] === 'object') {
        keyWordMatch = keyWordMatch.concat(scanObject(data[key]))
      }
      if (typeof data[key] === 'string') {
        keyWordMatch = keyWordMatch.concat(scanString(data[key]))
      }
    }

    //Only return unique key words.
    const uniqeKeyWords = [...new Set(keyWordMatch)]

    return uniqeKeyWords
  } catch (err) {
    console.error(`Error scanning form for self-harm key words
    ${err}`)
    return []
  }
}

//Scan String for key words. Tokenize and stem to identify root words.
const scanString = (str) => {
  try {
    let modifiedStr = str

    modifiedStr = modifiedStr
      .replace(/\r?\n|\r/g, ' ') //Remove newline characters
      .replace(/\s+/g, ' ') //Remove any extra sapaces

    //Attempt to get root for words in String.
    const formTokens = modifiedStr.tokenizeAndStem()
    modifiedStr = modifiedStr + ', ' + formTokens.toString()

    let wordsUsed = ''
    let wordsUsedArray = []
    let key_name_nl
    normalizedModifiedStr = modifiedStr
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    for (var key_nl in selfHarmWords) {
      key_name_nl = selfHarmWords[key_nl]
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
      if (normalizedModifiedStr.includes(key_name_nl) && key_name_nl !== '') {
        if (selfHarmWords[key_nl] !== '') {
          wordsUsedArray.push(selfHarmWords[key_nl].toLowerCase())
        }
      }
    }

    wordsUsed = wordsUsedArray.toString()

    return wordsUsed
  } catch (err) {
    logger.error({
      message: 'Error parsing String for self-harm key words',
      string: str,
      error: err,
    })
    return []
  }
}

//Scan object for String values. This assumes one level of nested objects.
const scanObject = (obj) => {
  let objStrings = []

  try {
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        let subObj = obj[key]
        for (let subKey in subObj) {
          if (typeof subObj[subKey] === 'string') {
            objStrings = objStrings.concat(scanString(subObj[subKey]))
          }
        }
      }
      if (typeof obj[key] === 'string') {
        objStrings = objStrings.concat(scanString(obj[key]))
      }
    }
  } catch (err) {
    logger.error({
      message: 'Error parsing Object for self-harm key words',
      object: obj,
      error: err,
    })
    return []
  }

  return objStrings
}

module.exports = { selfHarmWordsScan }
