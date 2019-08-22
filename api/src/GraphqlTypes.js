const {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql')

const TimeFrameInput = new GraphQLInputObjectType({
  name: 'timeFrame',
  fields: () => ({
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
  }),
})
module.exports.TimeFrameInput = TimeFrameInput

const WhatHappenedInput = new GraphQLInputObjectType({
  name: 'whatHappened',
  fields: () => ({
    whatHappened: { type: GraphQLString },
  }),
})
module.exports.WhatHappenedInput = WhatHappenedInput

const ScammerDetailsInput = new GraphQLInputObjectType({
  name: 'scammerDetails',
  fields: () => ({
    scammerDetails: { type: GraphQLString },
    files: { type: new GraphQLList(GraphQLString) },
    fileDescriptions: { type: new GraphQLList(GraphQLString) },
  }),
})
module.exports.ScammerDetailsInput = ScammerDetailsInput

const ImpactInput = new GraphQLInputObjectType({
  name: 'impact',
  fields: () => ({
    howWereYouAffected: { type: new GraphQLList(GraphQLString) },
    otherImpact: { type: GraphQLString },
    damage: { type: GraphQLString },
  }),
})
module.exports.ImpactInput = ImpactInput

const P2ContactInfoInput = new GraphQLInputObjectType({
  name: 'P2ContactInfoInput',
  fields: () => ({
    fullName: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    postalCode: { type: GraphQLString },
  }),
})
module.exports.P2ContactInfoInput = P2ContactInfoInput

const TellUsMoreInput = new GraphQLInputObjectType({
  name: 'tellUsMore',
  fields: () => ({
    tellUsMore: { type: GraphQLString },
  }),
})
module.exports.TellUsMoreInput = TellUsMoreInput
