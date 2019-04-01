const { GraphQLScalarType } = require('graphql')

const emailRegex = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
)

function isEmail(value) {
  console.log(emailRegex.test(value))
}

const Email = new GraphQLScalarType({
  name: 'Email',
  description: 'An Email Scalar',
  serialize: value => isEmail(value),
})
