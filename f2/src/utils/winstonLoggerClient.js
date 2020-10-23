// Keep this logger separate from winstonLogger, this will be solely used by React client
require('dotenv').config()
const winston = require('winston')
const { createLogger, format } = require('winston')
const { combine, timestamp, label } = format

const prettyPrint = process.env.LOGGING_PRETTY_PRINT

const transports = []
const consoleTransport = new winston.transports.Console({
  level: 'debug',
  handleExceptions: true,
})

const url = new URL(window.location.href)

const httpTransport = new winston.transports.Http({
  host: url.hostname,
  port: url.port,
  ssl: url.protocol === 'http:' ? false : true,
  path: '/client-logger',
})

transports.push(consoleTransport)
transports.push(httpTransport)

const getLogger = (fileName) => {
  return createLogger({
    transports: transports,
    format: combine(
      label({ label: `${fileName}`, message: true }),
      timestamp(),
      prettyPrint ? format.prettyPrint() : format.json(),
    ),
    exitOnError: false,
  })
}

module.exports = { getLogger }
