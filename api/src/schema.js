const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const { Stats } = require('./Stats')
const { FlaggingSummary } = require('./FlaggingSummary')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    stats: {
      description: 'Stats about report collection',
      type: Stats,
      resolve: () => ({}),
    },
  }),
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    flagIdentifier: {
      description: 'Flag an identifier',
      type: FlaggingSummary,
      args: {
        identifier: {
          type: GraphQLString,
          description: 'the suspects identifier (phone no, url or email)',
        },
      },
      resolve: async (_root, { identifier }, { db }, _info) => {
        await db.saveReport({
          identifier: identifier,
          createdAt: new Date().toISOString(),
        })
        let summary = await db.summariseByDay(identifier)
        return {
          identifier,
          summary,
        }
      },
    },
  }),
})

module.exports.schema = new GraphQLSchema({ query, mutation })
