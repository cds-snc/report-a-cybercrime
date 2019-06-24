const { GraphQLString, GraphQLObjectType, GraphQLBoolean } = require('graphql')

const FileUploadResult = new GraphQLObjectType({
  name: 'fileUploadResult',
  fields: () => ({
    success: { type: GraphQLBoolean },
    errorMessage: { type: GraphQLString },
    md5: { type: GraphQLString },
  }),
})

module.exports.FileUploadResult = FileUploadResult
