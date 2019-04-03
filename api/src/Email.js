const { GraphQLScalarType } = require('graphql')
const { GraphQLError } = require('graphql/error')
const { Kind } = require('graphql/language')

const emailRegex = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
)

function isEmail(value) {
  return emailRegex.test(value)
}

const GraphQLEmail = new GraphQLScalarType({
  name: 'Email',
  description:
    'The `Email` scalar type represents an email address as specified by [RFC822](https://www.w3.org/Protocols/rfc822/).',
  serialize: value => {
    if (!isEmail(value)) {
      throw new GraphQLError(`Vale is not a valid email address: ${value}`)
    }
  },

  parseValue: value => {
    if (!isEmail(value)) {
      throw new GraphQLError(`Value is not a valid email address: ${value}`)
    }

    return value
  },

  parseLiteral: ast => {
    if (ast.kind != Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as email addresses but recieved: ${
          ast.kind
        }`,
      )
    }

    if (!isEmail(ast.value)) {
      throw new GraphQLError(`Value is not a valid email address: ${ast.value}`)
    }

    return ast.value
  },
})

module.exports.GraphQLEmail = GraphQLEmail
