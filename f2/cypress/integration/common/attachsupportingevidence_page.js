import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill AttachSupportingEvidence page forms', () => {
  const fileName = 'fake.jpg'
  cy.fixture(fileName).then((fileContent) => {
    cy.get('#uploader').upload({ fileContent, fileName, mimeType: 'image/jpg' })
  })
  cy.wait(1000)
})
