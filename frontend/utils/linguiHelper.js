const fs = require('fs')
const readline = require('readline')

console.log(
  'This outputs the lines of locale/fr/messages.json that require a translation. You can paste the lines into your favourite tranlation site, then paste the results into this script, and get lines to append to the messages.json file',
)

const rl = readline.createInterface({
  input: fs.createReadStream('locale/fr/messages.json'),
  crlfDelay: Infinity,
})

lines = []
rl.on('line', line => {
  if (line.includes('""')) {
    let match = line.match(/".+":/)[0]
    match = match.slice(1, -2)
    console.log(match)
    lines.push(match)
  }
})

var stdin = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
})

index = 0
stdin.on('line', function(translation) {
  console.log(`"${lines[index]}": "${translation}",`)
  index++
})
