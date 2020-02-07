// 'use strict'

const selfHarmWords = 'agile, lean, mvp, scrum'.split(',').map(w => w.trim())

const selfHarmWordsScan = data => {
  const json = JSON.stringify(data).toLowerCase()
  const wordsUsed = selfHarmWords.filter(w => json.includes(w))
  return wordsUsed
}

module.exports = { selfHarmWordsScan }
