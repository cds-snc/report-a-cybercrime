var fs = require('fs')

fs.readFile('locale/fr/messages.json', function(err, data) {
  if (err) throw err
  if (data.indexOf('""') >= 0) {
    throw new Error('Missing Translation!')
  }
})
