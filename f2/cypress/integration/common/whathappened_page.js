import { When } from 'cypress-cucumber-preprocessor/steps'

When('I fill to Whathappened page forms', () => {
  cy.fixture('form_data.json').then((user) => {
    var paragraph = user.small_en
    cy.get('form').find('[name="whatHappened"]').type(paragraph)
  })
})

When('I fill WhathappenedHarmful page forms', () => {
  cy.fixture('form_data.json').then((user) => {
    var paragraph = user.harmful_en
    cy.get('form').find('[name="whatHappened"]').type(paragraph)
  })
})

When('I fill WhathappenedInjection page forms', () => {
  cy.fixture('form_data.json').then((user) => {
    var paragraph = user.xssInjection1
    cy.get('form').find('[name="whatHappened"]').type(paragraph)
  })
})
