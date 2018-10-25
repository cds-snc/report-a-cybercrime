const express = require('express')
const graphqlHTTP = require('express-graphql')
const { schema } = require('./src/schema')

let server = express()

server.use('/', graphqlHTTP({ schema, graphiql: true }))

server.listen(3000)
