const { GraphQLObjectType, GraphQLInt } = require('graphql')

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
  }),
})

module.exports.Stats = Stats
