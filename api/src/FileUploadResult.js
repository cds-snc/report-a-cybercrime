const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql')

const FileUploadResult = new GraphQLObjectType({
  name: 'fileUploadResult',
  fields: () => ({
    success: { type: GraphQLBoolean },
    errorMessage: { type: GraphQLString },
    // Fields are nullable by default so these are not required in the return
    md5: { type: GraphQLString },
  }),
})

module.exports.FileUploadResult = FileUploadResult
