import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill Addsuspectclues page forms', () => {
  cy.get('form').find('[name="suspectClues1"]').type('Suspect Name Anonymous')
  cy.get('form').find('[name="suspectClues2"]').type('234 TallWood Cresent')
  cy.get('form')
    .find('[name="suspectClues3"]')
    .type('suspect clues - Tell More')
})

When('I fill NoAddsuspectclues page forms', () => {
  
})

When('I fill Addsuspectclues1 page forms', () => {
  cy.get('form').find('[name="suspectClues1"]').type('Suspect Name Anonymous')
})

When('I fill Addsuspectclues3 page forms', () => {
  cy.get('form')
    .find('[name="suspectClues3"]')
    .type('suspect clues - Tell More')
})

When('I fill Addsuspectclues3Inject page forms', () => {
  cy.fixture('form_data.json').then((user) => {
    var paragraph = user.sqpInjection1  
    cy.get('form').find('[name="suspectClues3"]').type(paragraph)
  })
})

When('I fill Addsuspectclues12 page forms', () => {
  cy.get('form').find('[name="suspectClues1"]').type('Suspect Name Anonymous')
  cy.get('form').find('[name="suspectClues2"]').type('234 TallWood Cresent')
})

When('I fill Addsuspectclues13 page forms', () => {
  cy.get('form').find('[name="suspectClues1"]').type('Suspect Name Anonymous')
  cy.get('form')
    .find('[name="suspectClues3"]')
    .type('suspect clues - Tell More')
})

When('I fill Addsuspectclues23 page forms', () => {
  cy.get('form').find('[name="suspectClues2"]').type('234 TallWood Cresent')
  cy.get('form')
    .find('[name="suspectClues3"]')
    .type('suspect clues - Tell More')
})



