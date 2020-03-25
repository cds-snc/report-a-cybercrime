
Given('I open the report home page', () => {
    cy.visit(Cypress.env('staging'))
});

Then('Inject axe and check for accessibility issues', () => {
    cy.reportA11y();
});
