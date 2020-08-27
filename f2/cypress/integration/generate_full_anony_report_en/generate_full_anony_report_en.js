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

When('I click on create a report button', () => {
  cy.contains('Start report').first().click({ force: true })
})

Then('I read before you start instructions', () => {
  cy.contains('Start report').first().click({ force: true })
})

And('I click continue without checking consent', () => {
  cy.contains('Continue').first().click({ force: true })
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
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill ReportAnonymously page forms', () => {
  cy.get('form').find('[value="anonymousPage.yes"]').check({ force: true })
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
      'Bed Bath & Beyond, https://www.bedbathandbeyond.ca/, Phone: (416) 205-9653',
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
  cy.get('form').find('[name="email"]').type('SuspectEnglish@magma.com')
  cy.get('form').find('[value="phone"]').check({ force: true })
  cy.get('form').find('[name="phone"]').type('1-800-000-1111')
  cy.get('form').find('[value="online"]').check({ force: true })
  cy.get('form').find('[name="online"]').type('http://www.suspectEnglish.com')
  cy.get('form').find('[value="application"]').check({ force: true })
  cy.get('form').find('[name="application"]').type('Whatapps')
  cy.get('form').find('[value="others"]').check({ force: true })
  cy.get('form').find('[name="others"]').type('In Person')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill whendidithappen page forms', () => {
  cy.get('form').find('[value="moreThanOnce"]').check({ force: true })
  cy.get('form').find('[name="startDay"]').type('16')
  cy.get('form').find('[name="startMonth"]').type('6')
  cy.get('form').find('[name="startYear"]').type('2020')
  cy.get('form').find('[name="endDay"]').type('30')
  cy.get('form').find('[name="endMonth"]').type('6')
  cy.get('form').find('[name="endYear"]').type('2020')
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
  cy.contains('Continue').first().click({ force: true })
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
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill whendidithappen page forms', () => {
  cy.get('form').find('[value="notSure"]').check({ force: true })
  cy.get('form')
    .find('[name="description"]')
    .type('It happens in second or third week of july')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

when('I fill Howwaspersonalinformationaffected forms', () => {
  cy.get('form')
    .find('[value="typeOfInfoReq.creditCard"]')
    .check({ force: true })
  cy.get('form').find('[value="typeOfInfoReq.dob"]').check({ force: true })
  cy.get('form')
    .find('[value="typeOfInfoReq.homeAddress"]')
    .check({ force: true })
  cy.get('form').find('[value="typeOfInfoReq.sin"]').check({ force: true })
  cy.get('form').find('[value="typeOfInfoReq.other"]').check({ force: true })
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
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Howwereyourdevicesaffected page forms', () => {
  cy.get('form').find('[name="device"]').type('Personal Computer')
  cy.get('form').find('[name="account"]').type('FaceBook')
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill to Howyourbusinessaffected forms', () => {
  cy.get('form').find('[name="nameOfBusiness"]').type('Edward Jones')
  cy.get('form').find('[name="industry"]').type('Financial Advisor')
  cy.get('form').find('[name="role"]').type('Expert Advisor')
  cy.get('form')
    .find('[value="numberOfEmployee.100To499"]')
    .check({ force: true })
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill to Whathappened page forms', () => {
  cy.get('form')
    .find('[name="whatHappened"]')
    .type('TC: full report- anony. What happened tell more')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Addsuspectclues page forms', () => {
  cy.get('form').find('[name="suspectClues1"]').type('Suspect Name Anonymous')
  cy.get('form').find('[name="suspectClues2"]').type('234 TallWood Cresent')
  cy.get('form')
    .find('[name="suspectClues3"]')
    .type('suspect clues - Tell More')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill AttachSupportingEvidence page forms', () => {
  //const fileName = 'fake.jpg';
  // cy.fixture(fileName).then(fileContent => {
  //    cy.get('#uploader').upload({ fileContent, fileName, mimeType: 'image/jpg' });
  // });
  //cy.wait(1000)

  const fileName1 = 'fake.jpg'

  cy.get('#uploader').uploadFile(fileName1, 'image/jpeg')
  cy.wait(1000)
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill to yourLocation page forms', () => {
  cy.get('form').find('[name="city"]').type('Ottawa')
  cy.get('form').find('[name="province"]').type('Ontario')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

Then('Take summary page screenshot', (content) => {
  cy.screenshot('reportSummary')
})

Then('I click submit report', () => {
  cy.contains('Submit report').first().click({ force: true })
})

Then('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

And('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})
