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

When('I change the language', () => {
  cy.contains('Français').first().click({ force: true })
  cy.wait(3000)
  cy.contains('Fournir des informations').first().click({ force: true })
})

Then('I click continue without checking consent', () => {
  cy.contains('Continuer').first().click({ force: true })
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
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Whathappened page forms', () => {
  cy.fixture('form_data.json').then((user) => {
    var large = user.small_fr
    cy.get('form').find('[id="whatHappened"]').type(large)
  })
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill AttachSupportingEvidence page forms', () => {
  const fileName1 = 'sample.txt'
  const fileName3 = 'March_2020.pdf'

  cy.get('#uploader').uploadFile(fileName1, 'text/plain')
  cy.wait(1000)

  cy.get('#uploader').uploadFile(fileName3, 'application/pdf')
  cy.wait(1000)
  //cy.screenshot()
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill yourLocation page forms', () => {
  cy.get('form').find('[id="postalCode"]').type('h1n2c9')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill yourContactDetails page forms', () => {
  cy.get('form').find('[id="fullName"]').type('Nom Prenom')
  cy.get('form').find('[id="email"]').type('hong.vu@rcmp-grc.gc.ca')
  cy.get('form').find('[id="phone"]').type('514-030-0233')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

Then('Take summary page screenshot', (content) => {
  cy.screenshot('reportSummaryFrench')
})

Then('I click submit report', () => {
  cy.contains('Soumettre le rapport').first().click({ force: true })
})

Then('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

And('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})
