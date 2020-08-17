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
    .find('[value="whoAreYouReportForPage.options.someone"]')
    .check({ force: true })
  cy.get('form')
    .find('[id="someoneDescription"]')
    .type('Je fais un reportage pour mon ami et son nom est Richard Legault')
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
  cy.get('form').find('[id="email"]').type('suspectFrench@magma.com')
  cy.get('form')
    .find('[value="howDidTheyReachYou.phone"]')
    .check({ force: true })
  cy.get('form').find('[id="phone"]').type('1-800-000-0001')
  cy.get('form')
    .find('[value="howDidTheyReachYou.online"]')
    .check({ force: true })
  cy.get('form')
    .find('[id="online"]')
    .type('http://www.suspectFrenchAnonymous.com')
  cy.get('form').find('[value="howDidTheyReachYou.app"]').check({ force: true })
  cy.get('form')
    .find('[id="application"]')
    .type('noms d’applications où vous avez communiqué Application')
  cy.get('form')
    .find('[value="howDidTheyReachYou.others"]')
    .check({ force: true })
  cy.get('form').find('[id="others"]').type('Une publicité')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill whendidithappen page forms', () => {
  cy.get('form').find('[value="notSure"]').check({ force: true })
  cy.get('form')
    .find('[id="description"]')
    .type('Peut-être dans la deuxième semaine avril')
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
  cy.get('form').find('[id="demandedMoney"]').type('$8000 CAD')
  cy.get('form').find('[id="moneyTaken"]').type('$3000 CAD')
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
  cy.get('form').find('[id="methodOther"]').type('Argent')
  cy.get('form').find('[id="transactionDay"]').type('20')
  cy.get('form').find('[id="transactionMonth"]').type('12')
  cy.get('form').find('[id="transactionYear"]').type('2019')
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
  cy.get('form').find('[id="infoReqOther"]').type('Permis de conduire')
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
  cy.get('form').find('[id="infoObtainedOther"]').type('Permis de conduire')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Howwereyourdevicesaffected page forms', () => {
  cy.get('form').find('[id="device"]').type('tablette Surface')
  cy.get('form').find('[id="account"]').type('DisneyPlus')
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
    .find('[value="numberOfEmployee.500More"]')
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
    var large = user.small_fr
    cy.get('form').find('[id="whatHappened"]').type(large)
  })
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill Addsuspectclues page forms', () => {
  cy.get('form').find('[id="suspectClues1"]').type('Nom du suspect')
  cy.get('form').find('[id="suspectClues2"]').type('Adresse du suspect')
  cy.get('form')
    .find('[id="suspectClues3"]')
    .type('Détail qui pourrait aider à identifier le suspect')
})

Then('I click {string}', () => {
  cy.contains('Continuer').first().click({ force: true })
})

Given('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})

When('I fill AttachSupportingEvidence page forms', () => {
  const fileName1 = 'sample.txt'
  const fileName2 = 'testFile.pdf'
  const fileName3 = 'girl.jpg'

  cy.get('#uploader').uploadFile(fileName1, 'text/plain')
  cy.wait(1000)

  cy.get('#uploader').uploadFile(fileName2, 'application/pdf')
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
  cy.get('form').find('[id="city"]').type('Montreal')
  cy.get('form').find('[id="province"]').type('Quebec')
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
