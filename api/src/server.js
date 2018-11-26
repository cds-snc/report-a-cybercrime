const express = require('express')
const graphqlHTTP = require('express-graphql')
const { dbinit } = require('./dbinit')
const { schema } = require('./schema')
const cors = require('cors')

const Server = async db => {
  let app = express()

  app.use(
    '/',
    cors(),
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
