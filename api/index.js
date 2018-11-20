const { Server } = require('./src/server')
const { db } = require('./src/db')

Server(db)
  .then(server => {
    server.listen({ port: 4000 }, () =>
      // eslint-disable-next-line no-console
      console.log(`🚀 API listening on port 4000`),
    )
  })
  .catch(console.log)
