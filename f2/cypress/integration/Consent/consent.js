
Given('I open the report home page', () => {
    cy.visit(Cypress.env('production'))

});

Then('Inject axe and check for accessibility issues', () => {
    cy.reportA11y();
});

When('I click on create a report button', () => {
    cy.contains('Report now').first().click({force: true});
});

When('I read before you start instructions', () => {
    cy.contains('Start report').first().click({force: true});
});

When('I click continue without checking the consent', () => {
    cy.contains('Continue').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

Then('check for accessibility issues', () => {
    cy.reportA11y();
});

When('I check the consent checkbox', () => {
    cy.get('form').find('[name="consentOptions"]').check({ force: true })
    cy.contains('Continue').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

Then('check for accessibility issues', () => {
    cy.reportA11y();
});
