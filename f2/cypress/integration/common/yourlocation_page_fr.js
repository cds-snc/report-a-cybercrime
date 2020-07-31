import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill yourLocation page forms', () => {
  cy.get('form').find('[id="city"]').type('Montreal')
  cy.get('form').find('[id="province"]').type('Quebec')
})
