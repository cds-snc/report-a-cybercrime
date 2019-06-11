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

    saveFileReport: async fileData => {
      let query = aql`
        INSERT ${fileData} IN files
        RETURN NEW
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
      let results = await db.query(query)
      const finalResults = await results.all()
      return finalResults
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
