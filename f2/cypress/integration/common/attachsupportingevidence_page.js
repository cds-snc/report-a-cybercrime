import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill AttachSupportingEvidence page forms', () => {
  const fileName1 = 'fake.jpg'
  const fileName2 = 'fake.jpg'
  const fileName3 = 'GithubDesktopDocumentation forInstallation_Tutorial.docx'
  cy.get('#uploader').uploadFile(fileName1, 'image/jpeg')
  cy.wait(1000)
  cy.get('#uploader').uploadFile(fileName2, 'image/jpeg')  
  cy.wait(1000)
  cy.get('#uploader').uploadFile(fileName3, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
  cy.wait(1000)
  
})

When('I fill AttachSupportingEvidenceSensitive page forms', () => {
  const fileName1 = 'girl.jpg'
  const fileName2 = 'gun-picture.jpg'
  const fileName3 = 'CJIM_5.9_UFS_Option_Analysis_DRAFT.xlsx'

  cy.get('#uploader').uploadFile(fileName1, 'image/jpeg')
  cy.wait(1000)
  cy.get('#uploader').uploadFile(fileName2, 'image/jpeg')
  cy.wait(1000)
  cy.get('#uploader').uploadFile(fileName3, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  cy.wait(1000)
})
