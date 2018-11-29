const { Server } = require('./src/server')
const { db } = require('./src/db')

const port = process.env.PORT || 3000
Server(db)
  .then(server => {
    server.listen({ port }, () =>
      // eslint-disable-next-line no-console
      console.log(`🚀 API listening on port ${port}`),
    )
  })
  .catch(console.log)
