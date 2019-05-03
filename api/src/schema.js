const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
} = require('graphql')
const { Stats } = require('./Stats')
const { GraphQLUpload } = require('graphql-upload')
const { FlaggingSummary } = require('./FlaggingSummary')

// eslint-disable-next-line
const streamToString = stream =>
  new Promise((resolve, reject) => {
    let data = ''
    stream
      .on('error', reject)
      .on('data', chunk => {
        data += chunk
      })
      .on('end', () => resolve(data))
  })

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    stats: {
      description: 'Stats about report collection',
      type: Stats,
      resolve: () => ({}),
    },
  }),
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    uploadImage: {
      description: 'Uploads an image.',
      type: GraphQLBoolean,
      args: {
        image: {
          description: 'Image file.',
          type: GraphQLUpload,
        },
      },
      async resolve(_parent, { image }, { minio }) {
        const { filename, _mimetype, _encoding, createReadStream } = await image
        const stream = createReadStream()
        // in case you want to print the file to stdout:
        // console.log(await streamToString(stream))

        // Accessing Minio from the context and calling the putObject function:
        // https://docs.min.io/docs/javascript-client-api-reference#putObject
        let response = await minio.putObject('kittens', filename, stream)

        // probably save details to ArangoDB
        console.log(response)
        // Return some sensible data to the client.
        // Example client setup here:
        // https://blog.apollographql.com/file-uploads-with-apollo-server-2-0-5db2f3f60675
        // Make sure what you return from this function matches the
        // return type you use above (line 39)
        return true
      },
    },
    flagIdentifier: {
      description: 'Flag an identifier',
      type: FlaggingSummary,
      args: {
        identifier: {
          type: GraphQLString,
          description: 'the suspects identifier (phone no, url or email)',
        },
      },
      resolve: async (_root, { identifier }, { db }, _info) => {
        await db.saveReport({
          identifier: identifier,
          createdAt: new Date().toISOString(),
        })
        let summary = await db.summariseByDay(identifier)
        return {
          identifier,
          summary,
        }
      },
    },
  }),
})

module.exports.schema = new GraphQLSchema({ query, mutation })
