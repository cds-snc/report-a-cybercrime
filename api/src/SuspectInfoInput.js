const {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql')

const SuspectInfoInput = new GraphQLInputObjectType({
  name: 'suspectInfoInput',
  fields: () => ({
    suspectName: { type: GraphQLString },
    suspectEmail: { type: GraphQLString },
    suspectAddress: { type: GraphQLString },
    suspectLanguage: { type: new GraphQLList(GraphQLString) },
    otherSuspectLanguage: { type: GraphQLString },
    suspectPhone: { type: GraphQLString },
    suspectWebsite: { type: GraphQLString },
    suspectIP: { type: GraphQLString },
  }),
})

module.exports.SuspectInfoInput = SuspectInfoInput
