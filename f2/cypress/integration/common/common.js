import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

// CLick <continue> button

Then('I click {string}', () => {
  //cy.get('[data-cy=submit]').click({ force: true })
  cy.contains('Continue').first().click({ force: true })
})

// Display the next page

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

// Take screen shoot at summary page

Then('Take summary page screenshot', (content) => {
  cy.screenshot('reportSummary')
  cy.wait(10000)
})

// Submit report button at summary page

Then('I submit report', () => {
  //cy.get('[data-cy=submit]').click({ force: true })
  cy.contains('Submit report').first().click({ force: true })
})

Then('I submit report in French', () => {
  //cy.get('[data-cy=submit]').click({ force: true })
  cy.contains('Soumettre le rapport').first().click({ force: true })
})
