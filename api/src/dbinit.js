const { aql } = require('arangojs')
const {
  generateDateObjects,
  sortByDateAttribute,
  uniqueArray,
} = require('./utils')
const unionBy = require('lodash.unionby')

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
    summariseReportsBetween: async ({ identifier, startDate, endDate }) => {
      let query = aql`
        FOR report IN reports
          FILTER DATE_FORMAT(report.createdAt, "%yyyy-%mm-%dd") >= ${startDate} AND
          DATE_FORMAT(report.createdAt, "%yyyy-%mm-%dd") <= ${endDate}
          FILTER report.identifier == ${identifier}
          COLLECT day = DATE_FORMAT(report.createdAt, "%yyyy-%mm-%dd")
            WITH COUNT INTO count
            RETURN {
              date: day,
              total: count
            }
      `
      let results = await db.query(query)
      let summaries = await results.all()
      let dates = generateDateObjects(startDate, endDate, { total: 0 })
      return sortByDateAttribute(uniqueArray(unionBy(summaries, dates, 'date')))
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
