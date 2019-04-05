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
    summariseByDay: async identifier => {
      let query = aql`
      FOR report IN reports
      FILTER report.identifier == ${identifier}
      COLLECT day = DATE_FORMAT(report.createdAt, "%yyyy-%mm-%dd")
      WITH COUNT INTO count
      RETURN {
        date: day,
        total: count
      }
      `
      let results = await db.query(query)
      return results.all()
    },
  }
}
module.exports.dbinit = dbinit
