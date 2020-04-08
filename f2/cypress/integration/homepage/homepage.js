Given('I open the local report home page', () => {
  cy.visit(Cypress.env('local'))
})

Then('Inject axe and check for accessibility issues', () => {
  cy.reportA11y()
})
