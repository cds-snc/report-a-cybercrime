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

const { A11yReporter } = require ('@cdssnc/a11y-tracker-client');

A11yReporter.configure({
  trackerURI: undefined,
  revision: '<local>',
  project: 'report-cyber-crime',
});

if (Cypress.env['testing'] && Cypress.env['GITHUB_REF'] === 'refs/heads/master') {
  A11yReporter.configure({
    trackerURI: Cypress.env('A11Y_TRACKER_URI') || 'https://a11y-tracker.herokuapp.com/',
    revision: Cypress.env('GITHUB_GIT_HASH'),
    //TODO: should be added to the secret keys
    key: Cypress.env('cds-snc:a11y-tracker:340044fa-92f6-46b5-8b9f-94f3ac80edcd'),
    project: 'report-cyber-crime',
  });
}

A11yReporter.setupCypress();
