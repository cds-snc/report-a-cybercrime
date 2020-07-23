import { Given, After, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
// Hooks for repeated commands/rules
//After(() => {
// cy.reportA11y();
//});

Given('I open the report home page', () => {
    cy.visit(Cypress.env('website'))
});

When('I click on create a report button', () => {
    cy.contains('Report now').first().click({force: true});
});

Then('I read before you start instructions', () => {
    cy.contains('Start report').first().click({force: true});
});

And('I click continue without checking consent', () => {
    cy.contains('Continue').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I check the consent checkbox', () => {
    cy.get('form').find('[value="privacyConsentInfoForm.yes"]').check({ force: true })
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill ReportAnonymously page forms', () => {
    //cy.get('form').find('[value="anonymousPage.no"]').check({ force: true })
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill howdiditstart page forms', () => {
    cy.get('form').find('[value="howDidTheyReachYou.others"]').check({ force: true })
    cy.get('form').find('[id="others"]').type('In Person')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill whendidithappen page forms', () => {
    cy.get('form').find('[value="notSure"]').check({ force: true })
});

Then('I click {string}', () => {
    cy.contains('Continuer').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Whatcouldbeaffected page forms', () => {
    cy.get('form').find('[value="whatWasAffectedForm.devices"]').check({ force: true })
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Howwereyourdevicesaffected page forms', () => {
    cy.get('form').find('[name="device"]').type('Personal Computer')
    cy.get('form').find('[name="account"]').type('FaceBook')
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill to Whathappened page forms', () => {
    cy.get('form').find('[name="whatHappened"]').type('TC: Other-deviceWhat happened tell more')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Addsuspectclues page forms', () => {
    //cy.get('form').find('[name="suspectClues1"]').type('Suspect Name English')
    //cy.get('form').find('[name="suspectClues2"]').type('1200 Vanier Parkway')
    //cy.get('form').find('[name="suspectClues3"]').type('suspect clues - Tell More')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill AttachSupportingEvidence page forms', () => {
    const fileName1 = 'girl.jpg';
    const fileName2 = 'gun-picture.jpg';

    cy.get('#uploader').uploadFile(fileName1, 'image/jpeg');
    cy.wait(1000)

    cy.get('#uploader').uploadFile(fileName2, 'image/jpeg');
    cy.wait(1000)

});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill to yourLocation page forms', () => {
    cy.get('form').find('[id="postalCode"]').type('t4h1j1')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill yourContactDetails page forms', () => {
    cy.get('form').find('[id="fullName"]').type('FirstName LastName')
    cy.get('form').find('[id="email"]').type('Hong.Vu@rcmp-grc.gc.ca')
    cy.get('form').find('[id="phone"]').type('4031015934')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

Then('Take summary page screenshot', (content) => {
    cy.screenshot("reportSummary")
});

Then('I click submit report', () => {
    cy.contains('Submit report').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

And('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});