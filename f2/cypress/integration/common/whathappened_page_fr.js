import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill Whathappened page forms', () => {
  cy.fixture('form_data.json').then((user) => {
    var large = user.small_fr
    cy.get('form').find('[id="whatHappened"]').type(large)
  })
})
