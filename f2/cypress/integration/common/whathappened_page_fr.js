import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill Whathappened in French page forms', () => {
  cy.fixture('form_data.json').then((user) => {
    var paragraph = user.small_fr
    cy.get('form').find('[name="whatHappened"]').type(paragraph)
  })
})

When('I fill WhathappenedHarmful in French page forms', () => {
  cy.fixture('form_data.json').then((user) => {
    var paragraph = user.harmful_fr
    cy.get('form').find('[name="whatHappened"]').type(paragraph)
  })
})
