const { aql } = require('arangojs')

const dbinit = async db => {
  return {
    hello: async () => {
      let query = aql`
          RETURN "Hello world"
      `
      let results = await db.query(query)
      return results.next()
    },
    saveReport: async report => {
      let query = aql`
        INSERT ${report} IN reports
        RETURN NEW
  `
      let results = await db.query(query)
      return results.next()
    },
  }
}
module.exports.dbinit = dbinit
