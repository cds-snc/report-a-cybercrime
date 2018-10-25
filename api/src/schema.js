const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const query = new GraphQLObjectType({
  name: 'Query',
	fields: () => ({
    hello: {
      description: 'greets the world',
      type: GraphQLString,
      resolve: () => {
        return 'hello world'
      },
    },
  }),
})

module.exports.schema = new GraphQLSchema({ query })
