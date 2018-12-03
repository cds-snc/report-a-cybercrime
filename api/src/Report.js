const { GraphQLObjectType, GraphQLString } = require('graphql')

const Report = new GraphQLObjectType({
  name: 'Report',
  fields: () => ({
    whatHappened: {
      type: GraphQLString,
    },
    whatWasInvolved: {
      type: GraphQLString,
    },
    whatWasInvolvedOther: {
      type: GraphQLString,
    },
    howWereYouAffected: {
      type: GraphQLString,
    },
  }),
})

module.exports.Report = Report
