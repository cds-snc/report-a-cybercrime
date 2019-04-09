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
    flagPhoneNumber: {
      description: 'Flag a phone number',
      type: FlaggingSummary,
      args: {
        phoneNumber: {
          type: GraphQLString,
          description: 'the suspects phone number',
        },
      },
      resolve: async (_root, { phoneNumber }, { db }, _info) => {
        await db.saveReport({
          identifier: phoneNumber,
          createdAt: new Date().toISOString(),
        })
        let summary = await db.summariseByDay(phoneNumber)
        return {
          phoneNumber,
          summary,
        }
      },
    },
  }),
})

module.exports.schema = new GraphQLSchema({ query, mutation })
