const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const { Stats } = require('./Stats')

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
