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
  //cy.get('form').find('[value="anonymousPage.no"]').check({ force: true })
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Whoareyoureporting page forms', () => {
  cy.get('form')
    .find('[value="whoAreYouReportForPage.options.myself"]')
    .check({ force: true })
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill howdiditstart page forms', () => {
  cy.get('form')
    .find('[value="howDidTheyReachYou.email"]')
    .check({ force: true })
  cy.get('form').find('[id="email"]').type('SuspectEnglish@magma.com')
  cy.get('form')
    .find('[value="howDidTheyReachYou.phone"]')
    .check({ force: true })
  cy.get('form').find('[id="phone"]').type('1-800-000-1111')
  cy.get('form')
    .find('[value="howDidTheyReachYou.online"]')
    .check({ force: true })
  cy.get('form').find('[id="online"]').type('http://www.suspectEnglish.com')
  cy.get('form').find('[value="howDidTheyReachYou.app"]').check({ force: true })
  cy.get('form').find('[id="application"]').type('Whatapps')
  cy.get('form')
    .find('[value="howDidTheyReachYou.others"]')
    .check({ force: true })
  cy.get('form').find('[id="others"]').type('In Person')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill whendidithappen page forms', () => {
  cy.get('form').find('[value="once"]').check({ force: true })
  cy.get('form').find('[id="happenedOnceDay"]').type('28')
  cy.get('form').find('[id="happenedOnceMonth"]').type('2')
  cy.get('form').find('[id="happenedOnceYear"]').type('2019')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
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
  cy.get('form').find('[id="demandedMoney"]').type('$1000 Bitcoin')
  cy.get('form').find('[id="moneyTaken"]').type('$500 Bitcoin')
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
  cy.get('form').find('[id="methodOther"]').type('Certified Cheque')
  cy.get('form').find('[id="transactionDay"]').type('22')
  cy.get('form').find('[id="transactionMonth"]').type('01')
  cy.get('form').find('[id="transactionYear"]').type('2019')
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
  cy.get('form').find('[name="nameOfBusiness"]').type('Garizel Pizza')
  cy.get('form').find('[name="industry"]').type('Take Out Restaurant')
  cy.get('form').find('[name="role"]').type('Owner')
  cy.get('form').find('[value="numberOfEmployee.1To99"]').check({ force: true })
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
    .type('TC:Full report. What happened tell more')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Addsuspectclues page forms', () => {
  cy.get('form').find('[name="suspectClues1"]').type('Suspect Name English')
  cy.get('form').find('[name="suspectClues2"]').type('1200 Vanier Parkway')
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
  const fileName1 = 'girl.jpg'
  const fileName2 = 'gun-picture.jpg'

  cy.get('#uploader').uploadFile(fileName1, 'image/jpeg')
  cy.wait(1000)

  cy.get('#uploader').uploadFile(fileName2, 'image/jpeg')
  cy.wait(1000)
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill to yourLocation page forms', () => {
  cy.get('form').find('[id="postalCode"]').type('M3H 6A7')
})

Then('I click {string}', () => {
  cy.contains('Continue').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill yourContactDetails page forms', () => {
  cy.get('form').find('[id="fullName"]').type('FirstName LastName')
  cy.get('form').find('[id="email"]').type('Hong.Vu@rcmp-grc.gc.ca')
  cy.get('form').find('[id="phone"]').type('4161015934')
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
