const express = require('express')
const graphqlHTTP = require('express-graphql')
const { dbinit } = require('./dbinit')
const { schema } = require('./schema')

const Server = async db => {
  let app = express()

  app.use(
    '/',
    graphqlHTTP({
      schema,
      graphiql: true,
      context: {
        db: await dbinit(db),
      },
    }),
  )
  return app
}

module.exports.Server = Server
