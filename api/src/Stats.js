const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInt,
} = require('graphql')
const { GraphQLDateTime } = require('graphql-custom-types')
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
    flaggingsWithin: {
      type: FlaggingSummary,
      description: 'Daily totals for the identifier specified',
      args: {
        identifier: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'a phone number, email address or URL',
        },
        startDate: {
          type: new GraphQLNonNull(GraphQLDateTime),
          description: 'An ISO8601(YYYY-MM-DD) formatted date string',
        },
        endDate: {
          type: new GraphQLNonNull(GraphQLDateTime),
          description: 'An ISO8601(YYYY-MM-DD) formatted date string',
        },
      },
      resolve: async (_root, { identifier, startDate, endDate }, { db }) => {
        let summary = await db.summariseReportsBetween({
          startDate,
          endDate,
          identifier,
        })
        return {
          identifier,
          summary,
        }
      },
    },
  }),
})

module.exports.Stats = Stats
