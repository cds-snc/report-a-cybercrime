import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill to Whathappened page forms', () => {
  cy.get('form').find('[name="whatHappened"]').type('What happened tell more')
})
