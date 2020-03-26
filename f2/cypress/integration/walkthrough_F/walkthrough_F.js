Given('I open the report home page', () => {
  cy.visit(Cypress.env('staging'))
})

When('I change language', () => {
  cy.contains('Français')
    .first()
    .click({ force: true })
})

When('I click on create a report button', () => {
  cy.contains('Signaler maintenant')
    .first()
    .click({ force: true })
})

When('I read before you start instructions', () => {
  cy.contains('Commencer le rapport')
    .first()
    .click({ force: true })
})

When('I click continue without checking consent', () => {
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

When('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I check the consent checkbox', () => {
  cy.get('form')
    .find('[name="consentOptions"]')
    .check({ force: true })
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate to howdiditstart page fill all forms', () => {
  cy.get('form')
    .find('[value="howDidTheyReachYou.mail"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="email"]')
    .type('suspect@magma.com')
  cy.get('form')
    .find('[value="howDidTheyReachYou.phone"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="phone"]')
    .type('1-800-000-1111')
  cy.get('form')
    .find('[value="howDidTheyReachYou.online"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="online"]')
    .type('http://www.suspect.com')
  cy.get('form')
    .find('[value="howDidTheyReachYou.app"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="application"]')
    .type('suspect@magma.com')
  cy.get('form')
    .find('[value="howDidTheyReachYou.others"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="others"]')
    .type('In-person')
  cy.get('form')
    .find('[name="startDay"]')
    .type('26')
  cy.get('form')
    .find('[name="startMonth"]')
    .type('09')
  cy.get('form')
    .find('[name="startYear"]')
    .type('2019')
  cy.get('form')
    .find('[value="howManyTimes.severalTimes"]')
    .check({ force: true })
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate to Whatcouldbeaffected page fill all forms', () => {
  cy.get('form')
    .find('[value="whatWasAffectedForm.financial"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="whatWasAffectedForm.personal_information"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="whatWasAffectedForm.devices"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="whatWasAffectedForm.business_assets"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="whatWasAffectedForm.other"]')
    .check({ force: true })
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate to Howwereyourmoney page fill all forms', () => {
  cy.get('form')
    .find('[name="demandedMoney"]')
    .type('$10000 CAD')
  cy.get('form')
    .find('[name="moneyTaken"]')
    .type('$5000 CAD')
  cy.get('form')
    .find('[value="methodPayment.eTransfer"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="methodPayment.creditCard"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="methodPayment.giftCard"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="methodPayment.cash"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="methodPayment.other"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="methodOther"]')
    .type('Certified Cheque')
  cy.get('form')
    .find('[name="transactionDay"]')
    .type('02')
  cy.get('form')
    .find('[name="transactionMonth"]')
    .type('02')
  cy.get('form')
    .find('[name="transactionYear"]')
    .type('2019')
  cy.get('form')
    .find('[name="tellUsMore"]')
    .type('Testing')
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

when(
  'I navigate to Howwaspersonalinformationaffected page fill all forms',
  () => {
    cy.get('form')
      .find('[value="typeOfInfoReq.creditCard"]')
      .check({ force: true })
    cy.get('form')
      .find('[value="typeOfInfoReq.dob"]')
      .check({ force: true })
    cy.get('form')
      .find('[value="typeOfInfoReq.homeAddress"]')
      .check({ force: true })
    cy.get('form')
      .find('[value="typeOfInfoReq.sin"]')
      .check({ force: true })
    cy.get('form')
      .find('[value="typeOfInfoReq.other"]')
      .check({ force: true })
    cy.get('form')
      .find('[value="typeOfInfoObtained.creditCard"]')
      .check({ force: true })
    cy.get('form')
      .find('[value="typeOfInfoObtained.dob"]')
      .check({ force: true })
    cy.get('form')
      .find('[value="typeOfInfoObtained.homeAddress"]')
      .check({ force: true })
    cy.get('form')
      .find('[value="typeOfInfoObtained.sin"]')
      .check({ force: true })
    cy.get('form')
      .find('[value="typeOfInfoObtained.other"]')
      .check({ force: true })
    cy.get('form')
      .find('[name="tellUsMore"]')
      .type('testing')
    cy.contains('Continuer')
      .first()
      .click({ force: true })
  },
)

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate Howwereyourdevicesaffected page fill all forms', () => {
  cy.get('form')
    .find('[name="device"]')
    .type('Personal Computer')
  cy.get('form')
    .find('[name="account"]')
    .type('FaceBook')
  cy.get('form')
    .find('[name="devicesTellUsMore"]')
    .type('testing Devices Tell More')
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate to Howyourbusinessaffected page fill all forms', () => {
  cy.get('form')
    .find('[name="business"]')
    .type('testingBusiness')
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate to Whathappened page fill all forms', () => {
  cy.get('form')
    .find('[name="whatHappened"]')
    .type('testing')
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate to Addsuspectclues page fill all forms', () => {
  cy.get('form')
    .find('[name="suspectClues1"]')
    .type('testingClue1')
  cy.get('form')
    .find('[name="suspectClues2"]')
    .type('testingClue2')
  cy.get('form')
    .find('[name="suspectClues3"]')
    .type('testingCLue3')
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate to AttachSupportingEvidence page fill all forms', () => {
  const fileName = 'crime.jpg'
  cy.fixture(fileName).then(fileContent => {
    cy.get('#uploader').upload({ fileContent, fileName, mimeType: 'image/jpg' })
  })
  cy.wait(1000)
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate to yourLocation page fill all forms', () => {
  cy.get('form')
    .find('[name="postalCode"]')
    .type('K2G 6R2')
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate to yourContactDetails page fill all forms', () => {
  cy.get('form')
    .find('[name="fullName"]')
    .type('FirstName LastName')
  cy.get('form')
    .find('[name="email"]')
    .type('lmcbhvu@gmail.com')
  cy.get('form')
    .find('[name="phone"]')
    .type('613-000-1234')
  cy.contains('Continuer')
    .first()
    .click({ force: true })
})

Then('{string} should be shown', content => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I navigate to summary page fill all forms', () => {
  cy.contains('Soumettre le rapport')
    .first()
    .click({ force: true })
})
