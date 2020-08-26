import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill city and province Location page forms', () => {
  cy.get('form').find('[name="city"]').type('Ottawa')
  cy.get('form').find('[name="province"]').type('Ontario')
})

When('I fill no Location page forms', () => {
  //cy.get('form').find('[id="city"]').type('Montreal')
  //cy.get('form').find('[id="province"]').type('Quebec')
})

When('I fill city Location page forms', () => {
  cy.get('form').find('[name="city"]').type('Montreal')
  //cy.get('form').find('[id="province"]').type('Quebec')
})

When('I fill province Location page forms', () => {
  //cy.get('form').find('[id="city"]').type('Montreal')
  cy.get('form').find('[name="province"]').type('Quebec')
})

When('I fill postalCode1 page forms', () => {
  cy.get('form').find('[name="postalCode"]').type('k2j6r2')
})
