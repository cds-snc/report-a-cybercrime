import { When, And, Given } from 'cypress-cucumber-preprocessor/steps'

And('I click continue without checking consent', () => {
  //cy.get('[data-cy=submit]').first().click({ force: true })
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I check the consent checkbox', () => {
  cy.get('form')
    .find('[value="privacyConsentInfoForm.yes"]')
    .check({ force: true })
})
