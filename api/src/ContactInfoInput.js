const { GraphQLString, GraphQLInputObjectType } = require('graphql')

const ContactInfoInput = new GraphQLInputObjectType({
  name: 'contactInfoInput',
  fields: () => ({
    contactInfoName: { type: GraphQLString },
    contactInfoEmail: { type: GraphQLString },
    contactInfoPhone: { type: GraphQLString },
  }),
})

module.exports.ContactInfoInput = ContactInfoInput
