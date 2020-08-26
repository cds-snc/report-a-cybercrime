import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill Addsuspectclues in French page forms', () => {
  cy.get('form').find('[name="suspectClues1"]').type('Nom du suspect')
  cy.get('form').find('[name="suspectClues2"]').type('Adresse du suspect')
  cy.get('form')
    .find('[name="suspectClues3"]')
    .type('Détail qui pourrait aider à identifier le suspect')
})
