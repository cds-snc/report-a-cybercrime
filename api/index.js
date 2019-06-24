const { Server } = require('./src/server')
const { db } = require('./src/db')
const { dbinit } = require('./src/dbinit')
const { Logger } = require('@cdssnc/logdriver')
const Minio = require('minio')

const {
  MINIO_ACCESS_KEY,
  MINIO_SECRET_KEY,
  MINIO_BUCKET_NAME,
  NODE_ENV,
} = process.env

var minioClient = new Minio.Client({
  endPoint: 'minio', // this dns name exists in local docker and k8s
  port: 9000,
  useSSL: false,
  accessKey: MINIO_ACCESS_KEY,
  secretKey: MINIO_SECRET_KEY,
})

const port = process.env.PORT || 3000
;(async () => {
  let bucket
  try {
    bucket = await minioClient.bucketExists(MINIO_BUCKET_NAME)
    if (!bucket) {
      await minioClient.makeBucket(MINIO_BUCKET_NAME)
    }
  } catch (error) {
    Logger.error(`Error connecting to Minio: ${error}`)
    return 1
  }

  const context = {
    db: await dbinit(db),
    minio: { client: minioClient, bucket: MINIO_BUCKET_NAME },
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
