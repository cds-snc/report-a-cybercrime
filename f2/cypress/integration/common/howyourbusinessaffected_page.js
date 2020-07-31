import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill to Howyourbusinessaffected forms', () => {
  cy.get('form').find('[name="nameOfBusiness"]').type('Edward Jones')
  cy.get('form').find('[name="industry"]').type('Financial Advisor')
  cy.get('form').find('[name="role"]').type('Expert Advisor')
  cy.get('form')
    .find('[value="numberOfEmployee.100To499"]')
    .check({ force: true })
})
