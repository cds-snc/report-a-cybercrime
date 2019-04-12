const { GraphQLScalarType } = require('graphql')
const { GraphQLError } = require('graphql/error')
const { Kind } = require('graphql/language')
const { isUrl } = require('../utils')

// this file taken and modified from https://github.com/okgrow/graphql-scalars

const URL = new GraphQLScalarType({
  name: 'URL',

  description:
    'A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt.',

  serialize(value) {
    if (typeof value !== 'string') {
      throw new TypeError(`Value is not a string`)
    }

    if (!isUrl(value)) {
      throw new TypeError(`Value is not a valid URL`)
    }

    return value
  },

  parseValue(value) {
    if (typeof value !== 'string') {
      throw new TypeError(`Value is not a string`)
    }

    if (!isUrl(value)) {
      throw new TypeError(`Value is not a valid URL`)
    }

    return value
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Can only validate strings as URLs`)
    }

    if (!isUrl(ast.value)) {
      throw new TypeError(`Value is not a valid URL`)
    }

    return ast.value
  },
})

module.exports.URL = URL
