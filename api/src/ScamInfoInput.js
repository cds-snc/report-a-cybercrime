const {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql')

const ScamInfoInput = new GraphQLInputObjectType({
  name: 'scamInfoInput',
  fields: () => ({
    howWereYouContacted: { type: new GraphQLList(GraphQLString) },
    otherMethodOfContact: { type: GraphQLString },
    whenWereYouContacted: { type: GraphQLString },
    scamDetails: { type: GraphQLString },
  }),
})

module.exports.ScamInfoInput = ScamInfoInput
