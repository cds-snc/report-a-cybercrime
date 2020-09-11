import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill ReportAnonymously page forms', () => {
  cy.get('form').find('[value="anonymousPage.yes"]').check({ force: true })
})

When('I fill NoReportAnonymously page forms', () => {
  //cy.get('form').find('[value="anonymousPage.no"]').check({ force: true })
})
