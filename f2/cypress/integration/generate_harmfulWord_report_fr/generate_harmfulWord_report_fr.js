import { Given, After, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
// Hooks for repeated commands/rules
//After(() => {
// cy.reportA11y();
//});

Given('I open the report home page', () => {
    cy.visit(Cypress.env('website'))
});

When ('I change the language',() => {
    cy.contains('Français').first().click({force: true});
    cy.wait(3000)
    cy.contains('Commencer le signalement').first().click({force: true});
});

Then('I read before you start instructions', () => {
    cy.contains('Commencer le rapport').first().click({force: true});
});

And('I click continue without checking consent', () => {
    cy.contains('Continuer').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I check the consent checkbox', () => {
    cy.get('form').find('[value="privacyConsentInfoForm.yes"]').check({ force: true })
});

Then('I click {string}', () => {
    cy.contains("Continuer").first().click({force: true});
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
    cy.get('form').find('[value="howDidTheyReachYou.others"]').check({ force: true })
    cy.get('form').find('[id="others"]').type('Une publicité')
});

Then('I click {string}', () => {
    cy.contains('Continuer').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill whendidithappen page forms', () => {
    cy.get('form').find('[value="once"]').check({ force: true })
    cy.get('form').find('[id="happenedOnceDay"]').type('28')
    cy.get('form').find('[id="happenedOnceMonth"]').type('2')
    cy.get('form').find('[id="happenedOnceYear"]').type('2019')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Whatcouldbeaffected page forms', () => {
    cy.get('form').find('[value="whatWasAffectedForm.devices"]').check({ force: true })
});

Then('I click {string}', () => {
    cy.contains('Continuer').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Howwereyourdevicesaffected page forms', () => {

    cy.get('form').find('[id="device"]').type('tablette Surface')
    cy.get('form').find('[id="account"]').type('DisneyPlus')
});

Then('I click {string}', () => {
    cy.contains('Continuer').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains('Continuer').first().click({force: true});
});

When('I fill Whathappened page forms', () => {
    cy.fixture('form_data.json').then((user) => {
       var large = user.harmful_fr;
       cy.get('form').find('[id="whatHappened"]').type(large)
    });   
});

Then('I click {string}', () => {
    cy.contains('Continuer').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Addsuspectclues page forms', () => {
    cy.get('form').find('[id="suspectClues1"]').type('Nous ne pouvions simplement pas abandonner.')
    cy.get('form').find('[id="suspectClues2"]').type('ils/elles détruisaient. Que ce serait mieux si je mourrais')
    cy.get('form').find('[id="suspectClues3"]').type('Nous sommes associés avec un papier de nos premiers jours jusqu à la fin de la vie')
});

Then('I click {string}', () => {
    cy.contains('Continuer').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill AttachSupportingEvidence page forms', () => {
    const fileName1 = 'sample.txt';
    const fileName2 = 'testFile.pdf';
    const fileName3 = 'March_2020.pdf';

    cy.get('#uploader').uploadFile(fileName1, 'text/plain');
    cy.wait(1000)

    cy.get('#uploader').uploadFile(fileName2, 'application/pdf');
    cy.wait(1000)

    cy.get('#uploader').uploadFile(fileName3, 'application/pdf');
    cy.wait(1000)
    //cy.screenshot()
});

Then('I click {string}', () => {
    cy.contains('Continuer').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill yourLocation page forms', () => {
    cy.get('form').find('[id="city"]').type('Montreal')
    cy.get('form').find('[id="province"]').type('Quebec')
});

Then('I click {string}', () => {
    cy.contains('Continuer').first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

Then('Take summary page screenshot', (content) => {
    cy.screenshot("reportSummaryFrench")
});

Then('I click submit report', () => {
    cy.contains('Soumettre le rapport').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

And('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
}); 
