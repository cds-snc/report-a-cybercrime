import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill Howyourbusinessaffected page forms', () => {
  cy.get('form')
    .find('[name="nameOfBusiness"]')
    .type('Health & Wellness Bedford')
  cy.get('form').find('[name="industry"]').type('Clinique de Santé')
  cy.get('form').find('[name="role"]').type('Expert en Informatique')
  cy.get('form')
    .find('[value="numberOfEmployee.500More"]')
    .check({ force: true })
})
