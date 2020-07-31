import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
// Hooks for repeated commands/rules
After(() => {
  cy.reportA11y()
})

When('I fill ReportAnonymously page forms', () => {
  //cy.get('form').find('[value="anonymousPage.no"]').check({ force: true })
})

When('I fill AttachSupportingEvidence page forms', () => {
  const fileName1 = 'girl.jpg'
  const fileName2 = 'gun-picture.jpg'

  cy.get('#uploader').uploadFile(fileName1, 'image/jpeg')
  cy.wait(1000)

  cy.get('#uploader').uploadFile(fileName2, 'image/jpeg')
  cy.wait(1000)
})

When('I fill to yourLocation page forms', () => {
  cy.get('form').find('[id="postalCode"]').type('k2j6r2')
})
