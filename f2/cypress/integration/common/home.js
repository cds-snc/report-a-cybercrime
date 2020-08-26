import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open the report home page', () => {
  cy.visit(Cypress.env('dev'))
})

When('I change the language', () => {
  cy.contains('Français').first().click({ force: true })
  cy.wait(3000)
  cy.contains('Commencer le signalement').first().click({ force: true })
})

When('I click on create a report button', () => {
  cy.contains('Start report').first().click({ force: true })
})

Then('I read before you start instructions', () => {
  cy.contains('Start report').first().click({ force: true })
  cy.contains('Continue').first().click({ force: true })
  //cy.get('[data-cy=submit]').click({ force: true })
})

Then('I read before you start instructions in French', () => {
  cy.contains('Commencer le rapport').first().click({ force: true })
  cy.contains('Continuer').first().click({ force: true })
  //cy.get('[data-cy=submit]').click({ force: true })
})
