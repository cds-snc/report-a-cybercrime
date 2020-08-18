import {
  Given,
  After,
  When,
  And,
  Then,
} from 'cypress-cucumber-preprocessor/steps'
// Hooks for repeated commands/rules
//After(() => {
// cy.reportA11y();
//});

Given('I open the report home page', () => {
  cy.visit(Cypress.env('website'))
})

When('I click on create a report button', () => {
  cy.contains('Submit a tip').first().click({ force: true })
})

//Then('I read before you start instructions', () => {
//    cy.contains('Start report').first().click({force: true});
//});

Then('I click continue without checking consent', () => {
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

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill to Whathappened page forms', () => {
  cy.get('form')
    .find('[name="whatHappened"]')
    .type(
      'TC: fyi-What happened tell more. Include things such as how you were contacted, what they asked for, and who they claimed to be',
    )
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill AttachSupportingEvidence page forms', () => {
  const fileName = 'version.png'
  cy.fixture(fileName).then((fileContent) => {
    cy.get('#uploader').upload({ fileContent, fileName, mimeType: 'image/png' })
  })
  cy.wait(1000)
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill to yourLocation page forms', () => {
  cy.get('form').find('[id="postalCode"]').type('h3c5x6')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill yourContactDetails page forms', () => {
  cy.get('form').find('[id="fullName"]').type('Hong Vu')
  cy.get('form').find('[id="email"]').type('hong.vu@rcmp-grc.gc.ca')
  cy.get('form').find('[id="phone"]').type('6131015934')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

Then('Take summary page screenshot', (content) => {
  cy.screenshot('reportSummary')
})

Then('I click submit report', () => {
  cy.contains('Submit report').first().click({ force: true })
})

Then('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

And('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})
