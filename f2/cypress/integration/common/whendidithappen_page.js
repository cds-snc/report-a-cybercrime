import { When } from 'cypress-cucumber-preprocessor/steps'

When('I fill whendidithappenonce page forms', () => {
  cy.get('form').find('[value="once"]').check({ force: true })
  cy.get('form').find('[name="happenedOnceDay"]').type('21')
  cy.get('form').find('[name="happenedOnceMonth"]').type('7')
  cy.get('form').find('[name="happenedOnceYear"]').type('2020')
})

When('I fill whendidithappenmore page forms', () => {
  cy.get('form').find('[value="moreThanOnce"]').check({ force: true })
  cy.get('form').find('[name="startDay"]').type('2')
  cy.get('form').find('[name="startMonth"]').type('06')
  cy.get('form').find('[name="startYear"]').type('2020')
  cy.get('form').find('[name="endDay"]').type('23')
  cy.get('form').find('[name="endMonth"]').type('06')
  cy.get('form').find('[name="endYear"]').type('2020')
})

When('I fill whendidithappennotsure page forms', () => {
  cy.get('form').find('[value="notSure"]').check({ force: true })
  cy.get('form')
    .find('[name="description"]')
    .type('I think it is about second week of April')
})

When('I fill whendidithappennotsureNodescription page forms', () => {
  cy.get('form').find('[value="notSure"]').check({ force: true })
})
