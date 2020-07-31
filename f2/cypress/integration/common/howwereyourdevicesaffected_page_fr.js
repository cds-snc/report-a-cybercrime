import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill Howwereyourdevicesaffected page forms', () => {
  cy.get('form').find('[id="device"]').type('tablette Surface')
  cy.get('form').find('[id="account"]').type('DisneyPlus')
})
