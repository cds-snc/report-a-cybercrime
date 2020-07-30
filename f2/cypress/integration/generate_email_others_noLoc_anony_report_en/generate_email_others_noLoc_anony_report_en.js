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
    cy.get('form').find('[value="anonymousPage.yes"]').check({ force: true })
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Whoareyoureporting page forms', () => {
    cy.get('form').find('[value="whoAreYouReportForPage.options.myself"]').check({ force: true })
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill howdiditstart page forms', () => {
    cy.get('form').find('[value="howDidTheyReachYou.email"]').check({ force: true })
    cy.get('form').find('[id="email"]').type('SuspectEnglish@magma.com')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill whendidithappen page forms', () => {
    cy.get('form').find('[value="moreThanOnce"]').check({ force: true })
    cy.get('form').find('[id="startDay"]').type('20')
    cy.get('form').find('[id="startMonth"]').type('4')
    cy.get('form').find('[id="startYear"]').type('2020')
    cy.get('form').find('[id="endDay"]').type('12')
    cy.get('form').find('[id="endMonth"]').type('5')
    cy.get('form').find('[id="endYear"]').type('2020')
});

Then('I click {string}', () => {
    cy.contains('Continuer').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Whatcouldbeaffected page forms', () => {
    cy.get('form').find('[value="whatWasAffectedForm.other"]').check({ force: true })
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill to Whathappened page forms', () => {
    cy.get('form').find('[name="whatHappened"]').type('TC: email-other-noLoc-anony. What happened tell more')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Addsuspectclues page forms', () => {
    cy.get('form').find('[name="suspectClues1"]').type('Suspect Name Anonymous')
    cy.get('form').find('[name="suspectClues2"]').type('234 TallWood Cresent')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill AttachSupportingEvidence page forms', () => {
    const fileName = 'March_2020.pdf';
    cy.get('#uploader').uploadFile(fileName, 'application/pdf');
    cy.wait(1000)
    cy.get('#uploader').uploadFile(fileName, 'application/pdf');
    cy.wait(1000)
    cy.get('#uploader').uploadFile(fileName, 'application/pdf');
    cy.wait(1000)
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill to yourLocation page forms', () => {
    //cy.get('form').find('[id="city"]').type('Ottawa')
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