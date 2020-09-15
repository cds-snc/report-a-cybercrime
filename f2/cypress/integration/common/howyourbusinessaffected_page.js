import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill to Howyourbusinessaffected forms', () => {
  cy.get('form').find('[name="nameOfBusiness"]').type('Edward Jones')
  cy.get('form').find('[name="industry"]').type('Financial Advisor')
  cy.get('form').find('[name="role"]').type('Expert Advisor')
  cy.get('form').find('[value="numberOfEmployee.1To99"]').check({ force: true })
})

When('I fill to Howyourbusinessaffected100 forms', () => {
  cy.get('form').find('[name="nameOfBusiness"]').type('Morneau Shepell')
  cy.get('form').find('[name="industry"]').type('Business Consulting')
  cy.get('form')
    .find('[value="numberOfEmployee.100To499"]')
    .check({ force: true })
})

When('I fill to Howyourbusinessaffected500 forms', () => {
  cy.get('form').find('[name="nameOfBusiness"]').type('Rastcom Canada')
  cy.get('form').find('[name="role"]').type('Owner')
  cy.get('form')
    .find('[value="numberOfEmployee.500More"]')
    .check({ force: true })
})

When('I fill to NoHowyourbusinessaffected forms', () => {})
