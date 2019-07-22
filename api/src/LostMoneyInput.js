const {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql')

const LostMoneyInput = new GraphQLInputObjectType({
  name: 'lostMoneyInput',
  fields: () => ({
    lostAmount: { type: GraphQLString },
    lostCurrency: { type: GraphQLString },
    lostOtherCurrency: { type: GraphQLString },
    lostMethodsOfPayment: { type: new GraphQLList(GraphQLString) },
    lostOtherMethodOfPayment: { type: GraphQLString },
  }),
})

module.exports.LostMoneyInput = LostMoneyInput
