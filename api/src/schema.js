const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      description: 'greets the world',
      type: GraphQLString,
      resolve: (root, args, { db }, info) => {
        return db.hello()
      },
    },
  }),
})

module.exports.schema = new GraphQLSchema({ query })
