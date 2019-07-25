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
      const query = aql`
        INSERT ${report} IN reports
        RETURN NEW
  `
      const results = await db.query(query)
      return results.next()
    },
    countReports: async () => {
      const query = aql`
        RETURN COUNT(reports)
      `
      const results = await db.query(query)
      return results.next()
    },

    saveFileReport: async fileData => {
      const query = aql`
        INSERT ${fileData} IN files
        RETURN NEW
      `
      const results = await db.query(query)
      return results.next()
    },
    summariseReportsBetween: async ({ identifier, startDate, endDate }) => {
      const query = aql`
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
      const results = await db.query(query)
      const summaries = await results.all()
      const dates = generateDateObjects(startDate, endDate, { total: 0 })
      return sortByDateAttribute(uniqueArray(unionBy(summaries, dates, 'date')))
    },
    getFiles: async ceName => {
      let query = ''
      if (ceName === 'ALL') {
        query = aql`
            RETURN files
          `
      } else {
        query = aql`
          FOR file IN files
          FILTER file.ceName == ${ceName}
          RETURN file
        `
      }
      const results = await db.query(query)
      const finalResults = await results.all()
      return finalResults
    },
    summariseByDay: async identifier => {
      const query = aql`
      FOR report IN reports
      FILTER report.identifier == ${identifier}
      COLLECT day = DATE_FORMAT(report.createdAt, "%yyyy-%mm-%dd")
      WITH COUNT INTO count
      RETURN {
        date: day,
        total: count
      }
      `
      const results = await db.query(query)
      return results.all()
    },
  }
}
module.exports.dbinit = dbinit
