import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill to yourLocation page forms', () => {
  cy.get('form').find('[id="city"]').type('Ottawa')
  cy.get('form').find('[id="province"]').type('Ontario')
})
