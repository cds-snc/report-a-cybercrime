const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = require('graphql')

const DailyTotal = new GraphQLObjectType({
  name: 'DailyTotal',
  fields: () => ({
    date: { type: GraphQLString },
    total: { type: GraphQLInt },
  }),
})

const FlaggingSummary = new GraphQLObjectType({
  name: 'identifierFlaggingsSummary',
  fields: () => ({
    identifier: { type: GraphQLString },
    summaryTotal: { type: GraphQLInt },
    summary: { type: new GraphQLList(DailyTotal) },
  }),
})

module.exports.FlaggingSummary = FlaggingSummary
