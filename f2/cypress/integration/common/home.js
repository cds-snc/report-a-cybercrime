import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open the report home page', () => {
  cy.visit(Cypress.env('local'))
})

When('I change the language', () => {
  cy.contains('Français').first().click({ force: true })
  cy.wait(2000)
  cy.contains('Signaler maintenant').first().click({ force: true })
})

When('I click on create a report button', () => {
  cy.contains('Report now').first().click({ force: true })
})

Then('I read before you start instructions', () => {
  //cy.contains('Start report').first().click({force: true});
  cy.get('[data-cy=submit]').click({ force: true })
})
