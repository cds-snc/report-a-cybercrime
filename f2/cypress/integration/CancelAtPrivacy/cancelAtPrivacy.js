
Given('I open the report home page', () => {
    cy.visit(Cypress.env('production'))

});

When('I click on create a report button', () => {
    cy.contains('Report now').first().click({force: true});
});

When('I read before you start instructions', () => {
    cy.contains('Start report').first().click({force: true});
});

When('I click cancel button', () => {
    cy.contains('Cancel report').first().click({force: true});
});

When('I confirm the cancellation', () => {
    cy.get('button').contains('Cancel report').first().click({force: true});
});

When('I give the reason to cancel', () => {
    cy.contains('Tell us more').first().click({force: true});
});

When('I give the feedback', () => {
    cy.get('form').find('[value="finalFeedback.wasServiceHard.neutral"]').check({ force: true })
    cy.get('form').find('[value="finalFeedback.wouldYouUseAgain.yes"]').check({ force: true })
    cy.get('form').find('[name="howCanWeDoBetter"]').type('testing')
    cy.contains('Submit').first().click({force: true});
});
