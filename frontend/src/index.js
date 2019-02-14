import app from './server'
import http from 'http'
import { Logger } from '@cdssnc/logdriver'
import fetch from 'node-fetch'

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

fetch(
  'http://compliance-watcher.symmorfosi.svc.cluster.local:3000/run_compliance',
  { method: 'POST', body: '' },
)

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
