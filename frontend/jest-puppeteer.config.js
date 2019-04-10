module.exports = {
  server: {
    command: `npm start`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
  launch: {
    dumpio: false,
    headless: false,
    slowMo: 50,
  },
  browserContext: 'default',
}
