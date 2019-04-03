const { GraphQLScalarType } = require('graphql')
const { GraphQLError } = require('graphql/error')
const { Kind } = require('graphql/language')

// this file taken and modified from https://github.com/okgrow/graphql-scalars

// see https://gist.github.com/dperini/729294
const URL_REGEX = new RegExp(
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$|^https?:\/\/localhost.*|^http:\/\/(\d{1,3})(\.\d{1,3}){3}(:\d{4})?\/$/i,
)

const URL = new GraphQLScalarType({
  name: 'URL',

  description:
    'A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt.',

  serialize(value) {
    if (typeof value !== 'string') {
      throw new TypeError(`Value is not a string`)
    }

    if (!URL_REGEX.test(value)) {
      throw new TypeError(`Value is not a valid URL`)
    }

    return value
  },

  parseValue(value) {
    if (typeof value !== 'string') {
      throw new TypeError(`Value is not a string`)
    }

    if (!URL_REGEX.test(value)) {
      throw new TypeError(`Value is not a valid URL`)
    }

    return value
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Can only validate strings as URLs`)
    }

    if (!URL_REGEX.test(ast.value)) {
      throw new TypeError(`Value is not a valid URL`)
    }

    return ast.value
  },
})

module.exports.URL = URL
