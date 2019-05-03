const { Server } = require('./src/server')
const { db } = require('./src/db')
const { dbinit } = require('./src/dbinit')
const { Logger } = require('@cdssnc/logdriver')
var Minio = require('minio')

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
  // XXX this is Minio's test server. It's OK to use it for testing and dev, but
  // be careful what you send there.
  endPoint: 'play.minio.io',
  port: 9000,
  useSSL: true,
  accessKey: 'Q3AM3UQ867SPQQA43P2F',
  secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
})

const port = process.env.PORT || 3000
;(async () => {
  let bucket = await minioClient.bucketExists('kittens')

  if (!bucket) {
    await minioClient.makeBucket('kittens')
  }

  const context = {
    db: await dbinit(db),
    minio: minioClient,
  }

  Server(context)
    .then(server => {
      server.listen({ port }, () =>
        // eslint-disable-next-line no-console
        Logger.info(`🚀 API listening on port ${port}`),
      )
    })
    .catch(Logger.error)
})()
