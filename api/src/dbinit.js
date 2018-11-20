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
    saveReport: async whatHappened => {
      await db
        .collection('report_collection')
        .save({ whatHappened: whatHappened })
      return 'success'
    },
  }
}
module.exports.dbinit = dbinit
