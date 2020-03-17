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

<<<<<<< HEAD

=======
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
>>>>>>> 5c3c0b01528bbbc233cae0e2b988a0c3d2eaf71c

A11yReporter.setupCypress();

let Chance = require('chance');
// Instantiate Chance here so it can be used in all tests
let chance = new Chance();
Cypress.config('city', chance.city())
Cypress.config('province', chance.province({country: 'ca', full: true}))
Cypress.config('phone', chance.phone())
Cypress.config('address', chance.address())
Cypress.config('fname', chance.first())
Cypress.config('sname', chance.last())
Cypress.config('postcode', chance.postal())
Cypress.config('email', chance.email())
Cypress.config('color', `Brown`)
Cypress.config('name', chance.name())
Cypress.config('year', chance.year({min: 2000, max: 2011}))
Cypress.config('month', chance.integer({ min: 1, max: 30 }))
Cypress.config('string',chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }))
Cypress.config('filename1' , './marchesurciel-lucille1.jpg')



