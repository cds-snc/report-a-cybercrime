const express = require('express')
const graphqlHTTP = require('express-graphql')
const { schema } = require('./schema')
const { graphqlUploadExpress } = require('graphql-upload')
const cors = require('cors')

const Server = async context => {
  let app = express()

  app.use(
    '/',
    cors(),
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
    graphqlHTTP({
      schema,
      graphiql: true,
      context,
    }),
  )
  return app
}

module.exports.Server = Server
