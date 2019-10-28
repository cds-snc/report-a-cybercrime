const express = require('express')
const graphqlHTTP = require('express-graphql')
const { schema } = require('./schema')
const { graphqlUploadExpress } = require('graphql-upload')
const cors = require('cors')

const Server = async context => {
  const app = express()

  app.get('/alive', (_req, res) => {
    res.send('yes')
  })

  app.get('/ready', async (_req, res) => {
    try {
      const version = await context.db.version()
      if (version) {
        res.send('yes')
      } else {
        res.status(500).json({ error: 'Unable to connect to ArangoDB' })
      }
    } catch (error) {
      res.status(500).json({ error: error.toString() })
    }
  })

  app.use(
    '/',
    cors(),
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 1 }),
    express.json(),
    (req, res, next) => {
      if (req.url === '/graphql/files') {
        if (req.body.secret === 'BigShush') {
          context.db
            .getFiles(req.body.ce ? req.body.ce : 'ALL')
            .then(data => res.send(data), () => res.sendStatus(500))
        } else {
          res.send({ NO: 'No files unless you provide a valid key!' })
        }
      } else {
        next()
      }
    },
    graphqlHTTP({
      schema,
      graphiql: true,
      context,
    }),
  )

  return app
}

module.exports.Server = Server
