import {
  Given,
  After,
  When,
  And,
  Then,
} from 'cypress-cucumber-preprocessor/steps'
// Hooks for repeated commands/rules
//After(() => {
// cy.reportA11y();
//});

Given('I open the report home page', () => {
  cy.visit(Cypress.env('website'))
})

When('I change the language', () => {
  cy.contains('Français').first().click({ force: true })
  cy.wait(3000)
  cy.contains('Commencer le signalement').first().click({ force: true })
})

Then('I read before you start instructions', () => {
  cy.contains('Commencer le rapport').first().click({ force: true })
})

And('I click continue without checking consent', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I check the consent checkbox', () => {
  cy.get('form')
    .find('[value="privacyConsentInfoForm.yes"]')
    .check({ force: true })
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill ReportAnonymously page forms', () => {
  // Do nothing
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Whoareyoureporting page forms', () => {
  cy.get('form')
    .find('[value="whoAreYouReportForPage.options.business"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="businessDescription"]')
    .type(
      'Souvenir du Quebec, https://www.souvenirduquebec.com/, (514) 895-0746',
    )
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill howdiditstart page forms', () => {
  cy.get('form').find('[value="email"]').check({ force: true })
  cy.get('form').find('[name="email"]').type('suspectFrench@magma.com')
  cy.get('form').find('[value="phone"]').check({ force: true })
  cy.get('form').find('[name="phone"]').type('1-800-000-1111')
  cy.get('form').find('[value="online"]').check({ force: true })
  cy.get('form').find('[name="online"]').type('http://www.suspectFrench.com')
  cy.get('form').find('[value="application"]').check({ force: true })
  cy.get('form')
    .find('[name="application"]')
    .type('Noms d’applications où vous avez communiqué Application')
  cy.get('form').find('[value="others"]').check({ force: true })
  cy.get('form').find('[name="others"]').type('Une publicité')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill whendidithappen page forms', () => {
  cy.get('form').find('[value="moreThanOnce"]').check({ force: true })
  cy.get('form').find('[name="startDay"]').type('6')
  cy.get('form').find('[name="startMonth"]').type('9')
  cy.get('form').find('[name="startYear"]').type('2019')
  cy.get('form').find('[name="endDay"]').type('12')
  cy.get('form').find('[name="endMonth"]').type('9')
  cy.get('form').find('[name="endYear"]').type('2019')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Whatcouldbeaffected page forms', () => {
  cy.get('form')
    .find('[value="whatWasAffectedForm.financial"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="whatWasAffectedForm.personalInformation"]')
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
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Howwereyourmoney page forms', () => {
  cy.get('form').find('[name="demandedMoney"]').type('$10000 CAD')
  cy.get('form').find('[name="moneyTaken"]').type('$5000 CAD')
  cy.get('form')
    .find('[value="methodPayment.eTransfer"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="methodPayment.creditCard"]')
    .check({ force: true })
  cy.get('form').find('[value="methodPayment.giftCard"]').check({ force: true })
  cy.get('form')
    .find('[value="methodPayment.cryptocurrency"]')
    .check({ force: true })
  cy.get('form').find('[value="methodPayment.other"]').check({ force: true })
  cy.get('form').find('[name="methodOther"]').type('Certified Cheque')
  cy.get('form').find('[name="transactionDay"]').type('02')
  cy.get('form').find('[name="transactionMonth"]').type('02')
  cy.get('form').find('[name="transactionYear"]').type('2019')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

when('I fill Howwaspersonalinformationaffected page forms', () => {
  cy.get('form')
    .find('[value="typeOfInfoReq.creditCard"]')
    .check({ force: true })
  cy.get('form').find('[value="typeOfInfoReq.dob"]').check({ force: true })
  cy.get('form')
    .find('[value="typeOfInfoReq.homeAddress"]')
    .check({ force: true })
  cy.get('form').find('[value="typeOfInfoReq.sin"]').check({ force: true })
  cy.get('form').find('[value="typeOfInfoReq.other"]').check({ force: true })
  cy.get('form').find('[name="infoReqOther"]').type('Passeport')
  cy.get('form')
    .find('[value="typeOfInfoObtained.creditCard"]')
    .check({ force: true })
  cy.get('form').find('[value="typeOfInfoObtained.dob"]').check({ force: true })
  cy.get('form')
    .find('[value="typeOfInfoObtained.homeAddress"]')
    .check({ force: true })
  cy.get('form').find('[value="typeOfInfoObtained.sin"]').check({ force: true })
  cy.get('form')
    .find('[value="typeOfInfoObtained.other"]')
    .check({ force: true })
  cy.get('form').find('[name="infoObtainedOther"]').type('Passeport')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Howwereyourdevicesaffected page forms', () => {
  cy.get('form').find('[name="device"]').type('tablette Surface')
  cy.get('form').find('[name="account"]').type('Netflix')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Howyourbusinessaffected page forms', () => {
  cy.get('form')
    .find('[name="nameOfBusiness"]')
    .type('Health & Wellness Bedford')
  cy.get('form').find('[name="industry"]').type('Clinique de Santé')
  cy.get('form').find('[name="role"]').type('Expert en Informatique')
  cy.get('form')
    .find('[value="numberOfEmployee.100To499"]')
    .check({ force: true })
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains('Continuer').first().click({ force: true })
})

When('I fill Whathappened page forms', () => {
  cy.fixture('form_data.json').then((user) => {
    var large = user.med_fr
    cy.get('form').find('[name="whatHappened"]').type(large)
  })
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Addsuspectclues page forms', () => {
  cy.get('form').find('[name="suspectClues1"]').type('Nom du suspect')
  cy.get('form').find('[name="suspectClues2"]').type('Adresse du suspect')
  cy.get('form')
    .find('[name="suspectClues3"]')
    .type('Détail qui pourrait aider à identifier le suspect')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill AttachSupportingEvidence page forms', () => {
  const fileName1 = 'crime.jpg'
  const fileName2 = 'fake.jpg'
  const fileName3 = 'rentalForm.jpg'

  cy.get('#uploader').uploadFile(fileName1, 'image/jpeg')
  cy.wait(1000)

  cy.get('#uploader').uploadFile(fileName2, 'image/jpeg')
  cy.wait(1000)

  cy.get('#uploader').uploadFile(fileName3, 'image/jpeg')
  cy.wait(1000)
  //cy.screenshot()
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill yourLocation page forms', () => {
  cy.get('form').find('[name="postalCode"]').type('h1m2c9')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill yourContactDetails page forms', () => {
  cy.get('form').find('[name="fullName"]').type('Nom Prenom')
  cy.get('form').find('[name="email"]').type('hong.vu@rcmp-grc.gc.ca')
  cy.get('form').find('[name="phone"]').type('514-030-0233')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

Then('Take summary page screenshot', (content) => {
  cy.screenshot('reportSummaryFrench')
})

Then('I click submit report', () => {
  cy.contains('Soumettre le rapport').first().click({ force: true })
})

Then('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

And('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})
