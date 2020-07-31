import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill Addsuspectclues page forms', () => {
  cy.get('form').find('[name="suspectClues1"]').type('Suspect Name Anonymous')
  cy.get('form').find('[name="suspectClues2"]').type('234 TallWood Cresent')
  cy.get('form')
    .find('[name="suspectClues3"]')
    .type('suspect clues - Tell More')
})
