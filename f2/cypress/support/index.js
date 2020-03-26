// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

const { A11yReporter } = require('@cdssnc/a11y-tracker-client')

A11yReporter.configure({
  trackerURI: undefined,
  revision: '<local>',
  project: 'report-cyber-crime',
})

if (
  process.env.NODE_ENV !== 'production' &&
  process.env.GITHUB_REF === 'refs/heads/master'
) {
  A11yReporter.configure({
    trackerURI:
      process.env.A11Y_TRACKER_URI || 'https://a11y-tracker.herokuapp.com/',
    revision: process.env.GITHUB_GIT_HASH,
    key: process.env.A11Y_TRACKER_KEY,
    project: 'report-cyber-crime',
  })
}

A11yReporter.setupCypress()
