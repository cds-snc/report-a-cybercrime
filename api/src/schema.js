const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql')
const { GraphQLUpload } = require('graphql-upload')
const { ReportSummary } = require('./ReportSummary')
const { ScamInfoInput } = require('./ScamInfoInput')
const { LostMoneyInput } = require('./LostMoneyInput')
const { SuspectInfoInput } = require('./SuspectInfoInput')
const { ContactInfoInput } = require('./ContactInfoInput')
const { Stats } = require('./Stats')
const { FileUploadResult } = require('./FileUploadResult')
const { createHash } = require('crypto')
const uuidv4 = require('uuid/v4')

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
  return new Promise(resolve => {
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
        fileDescription: {
          description: 'File description.',
          type: GraphQLString,
        },
      },
      async resolve(
        _parent,
        { file, fileDescription },
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
          await streamToString(createReadStream())
          await client.putObject(bucket, filename, stream)
          // We need to create an object name for this
          const today = new Date()
          const md5 = await calculateHash(createHash('md5'), md5stream)
          const ceName = 'CE-' + md5
          const upData = {
            ceName: ceName,
            fileName: filename,
            MD5: md5,
            submittedOn: today.toISOString(),
            fileDescription: fileDescription,
          }
          await db.saveFileReport(upData)
          // Return some sensible data to the client.
          // Example client setup here:
          // https://blog.apollographql.com/file-uploads-with-apollo-server-2-0-5db2f3f60675
          // Make sure what you return from this function matches the
          // return type you use above (line 39)
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

    submitReport: {
      description: 'Submit report to database',
      type: ReportSummary,
      args: {
        scamInfo: {
          type: ScamInfoInput,
          description: 'details about the scam',
        },
        lostMoney: {
          type: LostMoneyInput,
          description: 'details about the money lost',
        },
        suspectInfo: {
          type: SuspectInfoInput,
          description: 'details about the suspect',
        },
        files: {
          type: new GraphQLList(GraphQLString),
          description: 'files uploaded',
        },
        contactInfo: {
          type: ContactInfoInput,
          description: 'contact details about the user',
        },
      },
      resolve: async (
        _root,
        { scamInfo, lostMoney, suspectInfo, files, contactInfo },
        { db },
        _info,
      ) => {
        console.log('saving info', contactInfo)

        await db.saveReport({
          scamInfo,
          lostMoney,
          suspectInfo,
          files,
          contactInfo,
          createdAt: new Date().toISOString(),
        })
        return {
          reportID: uuidv4(),
        }
      },
    },
  }),
})

module.exports.schema = new GraphQLSchema({ query, mutation })
