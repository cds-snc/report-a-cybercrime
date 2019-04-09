const { GraphQLScalarType } = require('graphql')
const { GraphQLError } = require('graphql/error')
const { Kind } = require('graphql/language')

// this file taken and modified from https://github.com/okgrow/graphql-scalars

const PHONE_NUMBER_REGEX = new RegExp(/^\+\d{11,15}$/)

const PhoneNumber = new GraphQLScalarType({
  name: 'PhoneNumber',

  description:
    'A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.',

  serialize(value) {
    if (typeof value !== 'string') {
      throw new TypeError(`Value is not a string`)
    }

    if (!PHONE_NUMBER_REGEX.test(value)) {
      throw new TypeError(
        `Value is not a valid phone number of the form +17895551234 (10-15 digits):`,
      )
    }

    return value
  },

  parseValue(value) {
    if (typeof value !== 'string') {
      throw new TypeError(`Value is not a string:`)
    }

    if (!PHONE_NUMBER_REGEX.test(value)) {
      throw new TypeError(
        `Value is not a valid phone number of the form +17895551234 (10-15 digits):`,
      )
    }

    return value
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Can only validate strings as phone numbers`)
    }

    if (!PHONE_NUMBER_REGEX.test(ast.value)) {
      throw new TypeError(
        `Value is not a valid phone number of the form +17895551234 (10-15 digits):`,
      )
    }

    return ast.value
  },
})

module.exports.PhoneNumber = PhoneNumber
