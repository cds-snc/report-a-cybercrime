
Given('I open the report home page', () => {
    cy.visit(Cypress.env('production'))

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

When('I navigate to howdiditstart page fill all forms', () => {

    cy.get('form').find('[value="howDidTheyReachYou.email"]').check({ force: true })
    cy.get('form').find('[value="howDidTheyReachYou.phone"]').check({ force: true })
    cy.get('form').find('[value="howDidTheyReachYou.online"]').check({ force: true })
    cy.get('form').find('[value="howDidTheyReachYou.app"]').check({ force: true })
    cy.get('form').find('[value="howDidTheyReachYou.others"]').check({ force: true })

});


