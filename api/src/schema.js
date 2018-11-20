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
    saveReport: {
      description: 'report stuff',
      type: GraphQLString,
      resolve: (_root, _args, { db }, _info) => {
        return db.saveReport('stuff')
      },
    },
  }),
})

module.exports.schema = new GraphQLSchema({ query })
