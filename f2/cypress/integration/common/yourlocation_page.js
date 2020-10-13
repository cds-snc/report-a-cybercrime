import { When } from 'cypress-cucumber-preprocessor/steps'

When('I fill city and province Location page forms', () => {
  cy.get('form').find('[name="city"]').type('Ottawa')
  cy.get('form').find('[name="province"]').type('Ontario')
})

When('I fill no Location page forms', () => {})

When('I fill city Location page forms', () => {
  cy.get('form').find('[name="city"]').type('Montreal')
})

When('I fill province Location page forms', () => {
  cy.get('form').find('[name="province"]').type('Quebec')
})

When('I fill postalCode1 page forms', () => {
  cy.get('form').find('[name="postalCode"]').type('k2j6r2')
})

When('I fill postalCode2 page forms', () => {
  cy.get('form').find('[name="postalCode"]').type('m3h 6a7')
})

When('I fill postalCode3 page forms', () => {
  cy.get('form').find('[name="postalCode"]').type('h3c5x6')
})

When('I fill UnusedPostalCode page forms', () => {
  cy.get('form').find('[name="postalCode"]').type('b0a1a2')
})

When('I fill InvalidPostalCode page forms', () => {
  cy.get('form').find('[name="postalCode"]').type('f2k1W2')
})
