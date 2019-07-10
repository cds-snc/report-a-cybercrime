const { GraphQLString, GraphQLInputObjectType } = require('graphql')

const ContactInfoInput = new GraphQLInputObjectType({
  name: 'contactInfoInput',
  fields: () => ({
    userIsTheVictim: { type: GraphQLString },
    contactInfoName: { type: GraphQLString },
    contactInfoEmail: { type: GraphQLString },
    contactInfoPhone: { type: GraphQLString },
  }),
})

module.exports.ContactInfoInput = ContactInfoInput
