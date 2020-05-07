const { createLogger, format, transports } = require('winston')
var winston = require('winston')
const { combine, timestamp, label, prettyPrint } = format

// define the custom settings for each transport (file, console)
var options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    colorize: true,
  },
}

// instantiate a new Winston Logger with the settings defined above
var logger = createLogger({
  format: combine(label({ label: 'CDS label!' }), timestamp(), format.json()),
  transports: [new winston.transports.Console(options.console)],
  exitOnError: false, // do not exit on handled exceptions
})

module.exports = logger
