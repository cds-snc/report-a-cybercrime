import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Then('I click {string}', () => {
  cy.get('[data-cy=submit]').click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

Then('Take summary page screenshot', (content) => {
  cy.screenshot('reportSummary')
})
