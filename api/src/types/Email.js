const { GraphQLScalarType } = require('graphql')
const { GraphQLError } = require('graphql/error')
const { Kind } = require('graphql/language')

const emailRegex = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
)

function isEmail(value) {
  return emailRegex.test(value)
}

const Email = new GraphQLScalarType({
  name: 'Email',
  description:
    'The `Email` scalar type represents an email address as specified by [RFC822](https://www.w3.org/Protocols/rfc822/).',
  serialize: value => {
    if (typeof value !== 'string') {
      throw new TypeError(`Value is not a string`)
    }

    if (!isEmail(value)) {
      throw new TypeError(`Value is not a valid email address: ${value}`)
    }
    return value
  },

  parseValue: value => {
    if (typeof value !== 'string') {
      throw new TypeError(`Value is not a string`)
    }

    if (!isEmail(value)) {
      throw new TypeError(`Value is not a valid email address: ${value}`)
    }
    return value
  },

  parseLiteral: ast => {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as email addresses but recieved: ${
          ast.kind
        }`,
      )
    }

    if (!isEmail(ast.value)) {
      throw new TypeError(`Value is not a valid email address: ${ast.value}`)
    }

    return ast.value
  },
})

module.exports.Email = Email
