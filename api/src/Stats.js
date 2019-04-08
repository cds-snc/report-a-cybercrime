const { GraphQLString, GraphQLObjectType, GraphQLInt } = require('graphql')
const { FlaggingSummary } = require('./FlaggingSummary')
const { Report } = require('./Report')

const Stats = new GraphQLObjectType({
  name: 'Stats',
  fields: () => ({
    reportCount: {
      type: GraphQLInt,
      description: 'The total number of reports submitted.',
      resolve: (_root, _args, { db }, _info) => {
        return db.countReports()
      },
    },
    identifierFlaggingsWithin: {
      type: FlaggingSummary,
      description: 'Daily totals for the identifier specified',
      args: {
        identifier: {
          type: GraphQLString,
          description: 'the suspects identifier',
        },
      },
      resolve: async (_root, { identifier }, { db }) => {
        let summary = await db.summariseByDay(identifier)
        return {
          identifier,
          summary,
        }
      },
    },
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
          createdAt: new Date().toISOString(),
        })
      },
    },
  }),
})

module.exports.Stats = Stats
