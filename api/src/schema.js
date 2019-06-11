const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
} = require('graphql')
const { Stats } = require('./Stats')
const { GraphQLUpload } = require('graphql-upload')
const { FlaggingSummary } = require('./FlaggingSummary')
const { FileUploadResult } = require('./FileUploadResult')
const { createHash } = require('crypto')

// Puts a 0 in front of a number until it meets minLength
const padNumber = (num, minLength) => {
  var numString = num.toString()
  while (numString.length < minLength) {
    numString = '0' + numString
  }
  return numString
}

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

const calculateHash = (hashStream, fileStream) => {
  return new Promise((resolve, reject) => {
    fileStream.on('end', () => {
      hashStream.end()
      var data = ''
      for (var x of hashStream.read().values()) {
        data += x.toString(16)
      }
      resolve(data)
    })
    fileStream.pipe(hashStream)
  }).catch(console.log)
}

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
    uploadFile: {
      description: 'Uploads a file.',
      type: FileUploadResult,
      args: {
        file: {
          description: 'File.',
          type: GraphQLUpload,
        },
        TLP: {
          description: 'What TLP to share this at',
          type: GraphQLString,
        },
        TLPShare: {
          description: 'Whether or not we can share the sample itself',
          type: GraphQLBoolean,
        },
        thirdPartiesAllowed: {
          description: 'Can we consult with third parties?',
          type: GraphQLBoolean,
        },
        internetAccessAllowed: {
          description: 'Can we allow the sample to contact the internet?',
          type: GraphQLBoolean,
        },
        openSourceAllowed: {
          description: 'Can we research the open source?',
          type: GraphQLBoolean,
        },
        dataRestrictions: {
          description: 'Are there any additional data restrictions?',
          type: GraphQLBoolean,
        },
        dataRestrictionsSpecific: {
          description: 'Specific data restrictions',
          type: GraphQLString,
        },
      },
      async resolve(
        _parent,
        {
          file,
          TLP,
          TLPShare,
          thirdPartiesAllowed,
          internetAccessAllowed,
          openSourceAllowed,
          dataRestrictions,
          dataRestrictionsSpecific,
        },
        {
          minio: { client, bucket },
          db,
        },
      ) {
        const { filename, _mimetype, _encoding, createReadStream } = await file
        const stream = createReadStream()

        // Hashing this file will consume the stream, so we make several streams.
        const md5stream = createReadStream()

        // in case you want to print the file to stdout:
        // console.log(await streamToString(stream))

        // Accessing Minio from the context and calling the putObject function:
        // https://docs.min.io/docs/javascript-client-api-reference#putObject
        try {
          // Before trying to feed this to minIO we try to read the entire stream.
          // A failure results in a thrown exception.
          const stringStream = await streamToString(createReadStream())
          let response = await client.putObject(bucket, filename, stream)
          // We need to create an object name for this
          const today = new Date()
          const ceName =
            'CE' +
            today.getUTCFullYear().toString() +
            '-' +
            padNumber(today.getUTCDate(), 2) +
            padNumber(today.getUTCMonth(), 2) +
            padNumber(Math.floor(Math.random() * 9999 + 1), 4)
          // probably save details to ArangoDB
          console.log(response)
          const upData = {
            ceName: ceName,
            fileName: filename,
            MD5: await calculateHash(createHash('md5'), md5stream),
            submittedOn: today.toISOString(),
            TLP: TLP,
            TLPShare: TLPShare,
            internetAccessAllowed: internetAccessAllowed,
            thirdPartiesAllowed: thirdPartiesAllowed,
            openSourceAllowed: openSourceAllowed,
            dataRestrictions: dataRestrictions,
            dataRestrictionsSpecific: dataRestrictionsSpecific,
          }
          console.log(upData)
          await db.saveFileReport(upData)
          // Return some sensible data to the client.
          // Example client setup here:
          // https://blog.apollographql.com/file-uploads-with-apollo-server-2-0-5db2f3f60675
          // Make sure what you return from this function matches the
          // return type you use above (line 39)
          console.log({
            success: true,
            errorMessage: '',
            md5: upData.MD5,
          })
          return {
            success: true,
            errorMessage: '',
            md5: upData.MD5,
          }
        } catch (e) {
          if (e.name === 'PayloadTooLargeError') {
            return {
              success: false,
              errorMessage: 'This file exceeds the 10mb size limit',
            }
          } else {
            console.log(e)
            return {
              success: false,
              errorMessage: 'Something has gone catastrophically wrong',
            }
          }
        }
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
