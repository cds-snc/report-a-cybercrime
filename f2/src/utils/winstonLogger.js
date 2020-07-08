require('dotenv').config()
const winston = require('winston')
const expressWinston = require('express-winston')
require('winston-daily-rotate-file')
const { createLogger, format } = require('winston')
const { combine, timestamp, label } = format

const logDir = process.env.LOGGING_DIRECTORY
const ignoreRoutes = process.env.LOGGING_IGNORE_ROUTE

const ignoreRoutesArr = ignoreRoutes
  ? ignoreRoutes.replace(/\s/g, '').split(',')
  : []
const transports = []
const consoleTransport = new winston.transports.Console({
  level: 'debug',
  handleExceptions: true,
})

transports.push(consoleTransport)

if (logDir) {
  const fileTransport = new winston.transports.DailyRotateFile({
    dirname: logDir,
    filename: 'app-log-%DATE%.json',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: 'debug',
    handleExceptions: true,
  })
  transports.push(fileTransport)
}

const getLogger = (fileName) => {
  return createLogger({
    transports: transports,
    format: combine(
      label({ label: `${fileName}`, message: true }),
      timestamp(),
      format.prettyPrint(),
    ),
    exitOnError: false,
  })
}

const getExpressLogger = () => {
  return expressWinston.logger({
    transports: transports,
    format: format.prettyPrint(),
    dynamicMeta: (req, res) => {
      const httpRequest = {}
      const meta = {}
      if (req) {
        meta.httpRequest = httpRequest
        httpRequest.remoteIpv4andv6 = req.ip // this includes both ipv6 and ipv4 addresses separated by ':'
        httpRequest.remoteIpv4 =
          req.ip.indexOf(':') >= 0
            ? req.ip.substring(req.ip.lastIndexOf(':') + 1)
            : req.ip // just ipv4
        httpRequest.requestSize = req.socket.bytesRead
        httpRequest.referrer = req.get('Referrer')
      }
      return meta
    },
    ignoreRoute: (req, res) => {
      const requestPath = req.path.split('/')[1]
      const ignoreRoute = ignoreRoutesArr.includes(requestPath)

      if (ignoreRoute) {
        return true
      } else {
        return false
      }
    },
  })
}

module.exports = { getLogger, getExpressLogger }
