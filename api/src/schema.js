const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

var Report = new GraphQLObjectType({
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

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    saveReport: {
      description: 'report stuff',
      type: Report,
      args: {
        whatHappened: { type: GraphQLString, description: 'What happened' },
        whatWasInvolved: {
          type: GraphQLString,
          description: 'What was involved',
        },
        whatWasInvolvedOther: {
          type: GraphQLString,
          description: 'Free text field for what was involved',
        },
        howWereYouAffected: {
          type: GraphQLString,
          description: 'How were you affected',
        },
      },
      resolve: (
        _root,
        {
          whatHappened,
          whatWasInvolved,
          whatWasInvolvedOther,
          howWereYouAffected,
        },
        { db },
        _info,
      ) => {
        return db.saveReport({
          whatHappened,
          whatWasInvolved,
          whatWasInvolvedOther,
          howWereYouAffected,
        })
      },
    },
  }),
})

module.exports.schema = new GraphQLSchema({ query, mutation })
