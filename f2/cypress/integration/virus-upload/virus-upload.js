import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the report home page', () => {
    cy.visit(Cypress.env('staging'))
});

When('I click on create a report button', () => {
    cy.contains('Report now').first().click({force: true});
});

When('I read before you start instructions', () => {
    cy.contains('Start report').first().click({force: true});
});

When('I click continue without checking consent', () => {
    cy.contains('Continue').first().click({force: true});
});

When('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I check the consent checkbox', () => {
    cy.get('form').find('[name="consentOptions"]').check({ force: true })
    cy.contains('Continue').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to howdiditstart page and click continue', () => {
    cy.get('form').find('[value="howManyTimes.once"]').check({ force: true })
    cy.contains('Continue').first().click({force: true});
});

When('I navigate to Whatcouldbeaffected page and click continue', () => {
    cy.get('form').find('[value="whatWasAffectedForm.other"]').check({ force: true })
    cy.contains('Continue').first().click({force: true});
});

When('I navigate to Whathappened page and click continue', () => {
    cy.contains('Continue').first().click({force: true});
});

When('I navigate to Addsuspectclues page and click continue', () => {
    cy.contains('Continue').first().click({force: true});
});

When('upload the virus file', () => {
    const virusFile = 'scan.txt';
        cy.get('#uploader').uploadFile(virusFile, 'txt');
        cy.wait(1000)
        cy.contains('Continue').first().click({force: true});
});

When('I navigate to yourLocation page and click continue', () => {
    cy.contains('Continue').first().click({force: true});
});

When('I navigate to yourContactDetails page and click continue', () => {
    cy.contains('Continue').first().click({force: true});
});

When('I navigate to summary page and click Submit', () => {
    cy.contains('Submit report').first().click({force: true});
});
