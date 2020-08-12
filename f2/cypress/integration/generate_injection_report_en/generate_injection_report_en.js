import { Given, After, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
// Hooks for repeated commands/rules
//After(() => {
// cy.reportA11y();
//});

Given('I open the report home page', () => {
    cy.visit(Cypress.env('website'))
});

When('I click on create a report button', () => {
    cy.contains('Start report').first().click({force: true});
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
    //cy.get('form').find('[value="anonymousPage.yes"]').check({ force: true })
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Whoareyoureporting page forms', () => {
    cy.get('form').find('[value="whoAreYouReportForPage.options.business"]').check({ force: true })
    cy.get('form').find('[id="businessDescription"]').type('Bed Bath & Beyond, https://www.bedbathandbeyond.ca/, Phone: (416) 205-9653')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill howdiditstart page forms', () => {
    cy.get('form').find('[value="howDidTheyReachYou.email"]').check({ force: true })
    cy.fixture('form_data.json').then((user) => {
        var sqlInj = user.sqpInjection1;
        cy.get('form').find('[id="email"]').type(sqlInj)
    });
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill whendidithappen page forms', () => {
    cy.get('form').find('[value="notSure"]').check({ force: true })
    cy.fixture('form_data.json').then((user) => {
        var sqlInj = user.sqpInjection2;
        cy.get('form').find('[id="description"]').type(sqlInj)
    });
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
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
    cy.fixture('form_data.json').then((user) => {
        var htmlInj = user.htmlInjection;
        cy.get('form').find('[name="whatHappened"]').type(htmlInj)
    });
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill Addsuspectclues page forms', () => {
    cy.fixture('form_data.json').then((user) => {
        var xssInj1 = user.xssInjection1;
        var xssInj2 = user.xssInjection2;
        var xssInj3 = user.xssInjection3;
        cy.get('form').find('[name="suspectClues1"]').type(xssInj1)
        cy.get('form').find('[name="suspectClues2"]').type(xssInj2)
        cy.get('form').find('[name="suspectClues3"]').type(xssInj3)
    });
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill AttachSupportingEvidence page forms', () => {
    const fileName = 'version.png';
    cy.fixture(fileName).then(fileContent => {
        cy.get('#uploader').upload({ fileContent, fileName, mimeType: 'image/png' });
    });
    cy.wait(1000)
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill to yourLocation page forms', () => {
    cy.get('form').find('[id="postalCode"]').type('n1a1e3')
});

Then('I click {string}', () => {
    cy.contains("Continue").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I fill yourContactDetails page forms', () => {
    cy.get('form').find('[id="fullName"]').type('Robert Langua')
    cy.get('form').find('[id="email"]').type('robertLangua@hotmail.com')
    cy.get('form').find('[id="phone"]').type('7091015934')
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