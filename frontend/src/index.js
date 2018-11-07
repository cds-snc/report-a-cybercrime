import app from './server';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;

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
    console.log(error); // eslint-disable-line no-console
  }
  console.log(`🚀 started on port ${_port}`); // eslint-disable-line no-console
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!'); // eslint-disable-line no-console

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');  // eslint-disable-line no-console
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
