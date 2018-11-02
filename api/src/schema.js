const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      description: 'greets the world',
      type: GraphQLString,
      resolve: (_root, _args, { db }, _info) => {
        return db.hello()
      },
    },
  }),
})

module.exports.schema = new GraphQLSchema({ query })
