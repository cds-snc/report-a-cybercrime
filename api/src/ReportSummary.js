const { GraphQLString, GraphQLObjectType } = require('graphql')

const ReportSummary = new GraphQLObjectType({
  name: 'reportSummary',
  fields: () => ({
    reportID: { type: GraphQLString },
  }),
})

module.exports.ReportSummary = ReportSummary
