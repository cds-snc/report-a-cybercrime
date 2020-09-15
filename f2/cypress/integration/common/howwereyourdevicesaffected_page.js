import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill Howwereyourdevicesaffected page forms', () => {
  cy.get('form').find('[name="device"]').type('Personal Computer')
  cy.get('form').find('[name="account"]').type('FaceBook')
})

When('I fill Howwereyourdevicesaffected1 page forms', () => {
  cy.get('form').find('[name="device"]').type('Personal Computer')
})

When('I fill Howwereyourdevicesaffected2 page forms', () => {
  cy.get('form').find('[name="account"]').type('FaceBook')
})

When('I fill NoHowwereyourdevicesaffected page forms', () => {})
