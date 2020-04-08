//
// Usage: node extractFields.js
// - paste in the curl submit network command
// - saves file "fieldList.json"

const readline = require('readline')
const fs = require('fs')

const appendFields = (oldFields, text) => {
  let fields = JSON.parse(JSON.stringify(oldFields))
  const regex = /.name="([^\\]+)"\\r\\n\\r\\n([^\\]+)\\r/g
  let match = regex.exec(text)
  while (match) {
    const [_, name, value] = match
    const type = value.includes('[') ? 'array' : 'string'
    fields[name] = type
    match = regex.exec(text)
  }
  return fields
}

//  Main

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let fields = {}
rl.on('line', (line) => {
  fields = appendFields(fields, line)
  fs.writeFileSync('fieldList.json', JSON.stringify(fields, null, ' '))
  rl.close() // just expect one line of data
})
