const { aql } = require('arangojs')

const dbinit = async db => {
  return {
    saveReport: async report => {
      let query = aql`
        INSERT ${report} IN reports
        RETURN NEW
  `
      let results = await db.query(query)
      return results.next()
    },
    countReports: async () => {
      let query = aql`
        RETURN COUNT(reports)
      `
      let results = await db.query(query)
      return results.next()
    },
  }
}
module.exports.dbinit = dbinit
