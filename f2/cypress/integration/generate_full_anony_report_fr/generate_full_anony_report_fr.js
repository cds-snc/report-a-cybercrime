import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
// Hooks for repeated commands/rules
After(() => {
  cy.reportA11y()
})

Then('Take summary page screenshot', (content) => {
  cy.screenshot('reportSummaryFrench')
})
