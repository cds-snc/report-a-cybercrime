import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill Addsuspectclues page forms', () => {
  cy.get('form').find('[id="suspectClues1"]').type('Nom du suspect')
  cy.get('form').find('[id="suspectClues2"]').type('Adresse du suspect')
  cy.get('form')
    .find('[id="suspectClues3"]')
    .type('Détail qui pourrait aider à identifier le suspect')
})
