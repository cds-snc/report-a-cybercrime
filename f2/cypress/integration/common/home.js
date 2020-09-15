import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
// Test accessibility
//After(() => {
//  cy.reportA11y()
//})

Given('I open the report home page', () => {
  cy.visit(Cypress.env('local'))
})

// Start page in English

When('I click on create a report button', () => {
  cy.contains('Start report').first().click({ force: true })
})

When('I click on submit a tip', () => {
  cy.contains('Submit a tip').first().click({ force: true })
})

// Start page in French

When('I change the language', () => {
  cy.contains('Français').first().click({ force: true })
  cy.wait(3000)
  cy.contains('Commencer le signalement').first().click({ force: true })
})

When('I change the language and click Fournir des informations', () => {
  cy.contains('Français').first().click({ force: true })
  cy.wait(3000)
  cy.contains('Fournir des informations').first().click({ force: true })
})

// Second page - Before you start

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
