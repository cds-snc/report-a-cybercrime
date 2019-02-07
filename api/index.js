const { Server } = require('./src/server')
const { db } = require('./src/db')
const { Logger } = require('@cdssnc/logdriver')

const port = process.env.PORT || 3000
Server(db)
  .then(server => {
    server.listen({ port }, () =>
      // eslint-disable-next-line no-console
      Logger.info(`🚀 API listening on port ${port}`),
    )
  })
  .catch(Logger.error)
