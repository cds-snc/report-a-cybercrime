/*
 * Usage:
 *   node utils/mungeData.js data.json
 *   or
 *   node utils/mungeData.js data.json stats
 */

var fs = require('fs')
const content = fs.readFileSync(process.argv[2])
const data = JSON.parse(content)

const findStrings = x => {
  if (typeof x === 'string') {
    return [x]
  } else if (typeof x === 'object') {
    if (x === null) {
      return []
    }
    let list
    if (Array.isArray(x)) {
      list = x
    } else {
      list = Object.values(x)
    }
    return list
      .map(element => findStrings(element))
      .flat()
      .filter(s => s !== '')
  } else {
    return []
  }
}

const minCount = {
  p1: 1000,
  p2: 1000,
  cafc: 1000,
}

data.forEach(element => {
  element.wordCount = findStrings(element)
    .join(' ')
    .trim()
    .split(/\s+/).length
  minCount[element.source] = Math.min(
    minCount[element.source],
    element.wordCount,
  )
})
data.forEach(element => {
  element.minCount = minCount[element.source]
  element.wordCountNormalized = element.wordCount - element.minCount
})

if (process.argv.length === 4) {
  const sources = ['cafc', 'p1', 'p2']
  sources.forEach(source => {
    const totalWords = data
      .filter(e => e.source === source)
      .map(e => e.wordCountNormalized)
      .reduce((prev, curr) => prev + curr)
    const numResponses = data.filter(e => e.source === source).length

    console.log(
      `${source}: ${numResponses} responses, ${totalWords} words,  avg wordCountNormalized is ${totalWords /
        numResponses}`,
    )
  })
} else {
  console.log(JSON.stringify(data))
}
