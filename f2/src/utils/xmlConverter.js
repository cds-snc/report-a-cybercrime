var builder = require('xmlbuilder')

const printXML = (fields) => {
  console.log(fields)

  var root = builder
    .create('root')
    .ele('report', { rootAttribute: 'value' })
    .ele(fields)
    .end({ pretty: true })

  console.log(root)
}

module.exports = { printXML }
