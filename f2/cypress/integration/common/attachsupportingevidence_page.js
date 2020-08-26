import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill AttachSupportingEvidence page forms', () => {
  const fileName = 'fake.jpg'
  cy.get('#uploader').uploadFile(fileName, 'text/plain')
  cy.wait(1000)
})

When('I fill AttachSupportingEvidenceSensitive page forms', () => {
  const fileName1 = 'girl.jpg'
  const fileName2 = 'gun-picture.jpg'
  cy.get('#uploader').uploadFile(fileName1, 'image/jpeg')
  cy.wait(1000)
  cy.get('#uploader').uploadFile(fileName2, 'image/jpeg')
  cy.wait(1000)
})
