import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill AttachSupportingEvidence page forms', () => {
  const fileName1 = 'sample.txt'
  const fileName2 = 'testFile.pdf'
  const fileName3 = 'March_2020.pdf'

  cy.get('#uploader').uploadFile(fileName1, 'text/plain')
  cy.wait(1000)

  cy.get('#uploader').uploadFile(fileName2, 'application/pdf')
  cy.wait(1000)

  cy.get('#uploader').uploadFile(fileName3, 'application/pdf')
  cy.wait(1000)
  //cy.screenshot()
})
