import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill howdiditstart page forms', () => {
  cy.get('form').find('[value="email"]').check({ force: true })
  cy.get('form').find('[name="email"]').type('SuspectEnglish@magma.com')
  cy.get('form').find('[value="phone"]').check({ force: true })
  cy.get('form').find('[name="phone"]').type('1-800-000-1111')
  cy.get('form').find('[value="online"]').check({ force: true })
  cy.get('form').find('[name="online"]').type('http://www.suspectEnglish.com')
  cy.get('form').find('[value="application"]').check({ force: true })
  cy.get('form').find('[name="application"]').type('Whatapps')
  cy.get('form').find('[value="others"]').check({ force: true })
  cy.get('form').find('[name="others"]').type('In Person')
})

When('I fill howdiditstartEmail page forms', () => {
  cy.get('form').find('[value="email"]').check({ force: true })
  cy.get('form').find('[name="email"]').type('SuspectEnglish@magma.com')
})

When('I fill howdiditstartPhone page forms', () => {
  cy.get('form').find('[value="phone"]').check({ force: true })
  cy.get('form').find('[name="phone"]').type('1-800-000-1111')
})

When('I fill howdiditstartOnline page forms', () => {
  cy.get('form').find('[value="online"]').check({ force: true })
  cy.get('form').find('[name="online"]').type('http://www.suspectEnglish.com')
})

When('I fill howdiditstartApplication page forms', () => {
  cy.get('form').find('[value="application"]').check({ force: true })
  cy.get('form').find('[name="application"]').type('Whatapps')
})

When('I fill howdiditstartOther page forms', () => {
  cy.get('form').find('[value="others"]').check({ force: true })
  cy.get('form').find('[name="others"]').type('In Person')
})

When('I fill howdiditstartMailPhone page forms', () => {
  cy.get('form').find('[value="email"]').check({ force: true })
  cy.get('form').find('[name="email"]').type('SuspectEnglish@magma.com')
  cy.get('form').find('[value="phone"]').check({ force: true })
  cy.get('form').find('[name="phone"]').type('1-800-000-1111')
})

When('I fill Nohowdiditstart page forms', () => {})

When('I fill howdiditstartInjection page forms', () => {
  cy.get('form').find('[value="others"]').check({ force: true })
  cy.fixture('form_data.json').then((user) => {
    var paragraph = user.htmlInjection
    cy.get('form').find('[name="others"]').type(paragraph)
  })
})
