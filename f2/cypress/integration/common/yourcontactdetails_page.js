import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill yourContactDetails page forms', () => {
  cy.get('form').find('[name="fullName"]').type('FirstName LastName')
  cy.get('form').find('[name="email"]').type('Hong.Vu@rcmp-grc.gc.ca')
  cy.get('form').find('[name="phone"]').type('6131115634')
})

When('I fill yourContactDetailsMail page forms', () => {
  cy.get('form').find('[name="fullName"]').type('FirstName LastName')
  cy.get('form').find('[name="email"]').type('Hong.Vu@rcmp-grc.gc.ca')
  //cy.get('form').find('[id="phone"]').type('6131115634')
})

When('I fill yourContactDetailsPhone page forms', () => {
  cy.get('form').find('[name="fullName"]').type('FirstName LastName')
  //cy.get('form').find('[id="email"]').type('Hong.Vu@rcmp-grc.gc.ca')
  cy.get('form').find('[name="phone"]').type('6131115634')
})
