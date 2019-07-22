import '@babel/polyfill'
import app from './server'
import http from 'http'
import { Logger } from '@cdssnc/logdriver'

const server = http.createServer(app)

let currentApp = app

const { env } = require('process')

const port = () =>
  parseInt(
    env.RAZZLE_PORT ||
      env.PORT ||
      process.env.RAZZLE_PORT ||
      process.env.PORT ||
      3000,
    10,
  )

const _port = port()

server.listen(_port, error => {
  if (error) {
    Logger.error(error)
  }
  Logger.info(`🚀 started on port ${_port}`)
})

if (module.hot) {
  Logger.info('✅  Server-side HMR Enabled!')

  module.hot.accept('./server', () => {
    Logger.info('🔁  HMR Reloading `./server`...')
    server.removeListener('request', currentApp)
    const newApp = require('./server').default
    server.on('request', newApp)
    currentApp = newApp
  })
}
