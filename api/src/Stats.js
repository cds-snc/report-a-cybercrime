const { GraphQLString, GraphQLObjectType, GraphQLInt } = require('graphql')
const { FlaggingSummary } = require('./FlaggingSummary')

const Stats = new GraphQLObjectType({
  name: 'Stats',
  fields: () => ({
    reportCount: {
      type: GraphQLInt,
      description: 'The total number of reports submitted.',
      resolve: (_root, _args, { db }, _info) => {
        return db.countReports()
      },
    },
    identifierFlaggingsWithin: {
      type: FlaggingSummary,
      description: 'Daily totals for the identifier specified',
      args: {
        identifier: {
          type: GraphQLString,
          description: 'the suspects identifier',
        },
      },
      resolve: async (_root, { identifier }, { db }) => {
        let summary = await db.summariseByDay(identifier)
        return {
          identifier,
          summary,
        }
      },
    },
  }),
})

module.exports.Stats = Stats
