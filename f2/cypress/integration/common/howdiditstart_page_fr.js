import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill howdiditstart in French page forms', () => {
  cy.get('form').find('[value="email"]').check({ force: true })
  cy.get('form').find('[name="email"]').type('suspectFrench@magma.com')
  cy.get('form').find('[value="phone"]').check({ force: true })
  cy.get('form').find('[name="phone"]').type('1-800-000-0001')
  cy.get('form').find('[value="online"]').check({ force: true })
  cy.get('form')
    .find('[name="online"]')
    .type('http://www.suspectFrenchAnonymous.com')
  cy.get('form').find('[value="application"]').check({ force: true })
  cy.get('form')
    .find('[name="application"]')
    .type('noms d’applications où vous avez communiqué Application')
  cy.get('form').find('[value="others"]').check({ force: true })
  cy.get('form').find('[name="others"]').type('Une publicité')
})
