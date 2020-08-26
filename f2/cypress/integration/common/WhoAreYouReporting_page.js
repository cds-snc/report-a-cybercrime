import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill WhoAreYouReportingMyself page forms', () => {
  cy.get('form')
    .find('[value="whoAreYouReportForPage.options.myself"]')
    .check({ force: true })
})

When('I fill WhoAreYouReportingSomeOne page forms', () => {
  cy.get('form')
    .find('[value="whoAreYouReportForPage.options.someone"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="someoneDescription"]')
    .type('I am reporting for my friend and her name is Lilian Dufour')
})

When('I fill WhoAreYouReportingBusiness page forms', () => {
  cy.get('form')
    .find('[value="whoAreYouReportForPage.options.business"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="business"]')
    .type('Bed Bath & Beyond, https://bedbathandbeyond.ca/ ,613-823-4262')
})

When('I fill WhoAreYouReportingSomeOne in French page forms', () => {
  cy.get('form')
    .find('[value="whoAreYouReportForPage.options.someone"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="someoneDescription"]')
    .type('Je fais un reportage pour mon amie et son nom est Richard Legault')
})

When('I fill WhoAreYouReportingBusiness in French page forms', () => {
  cy.get('form')
    .find('[value="whoAreYouReportForPage.options.business"]')
    .check({ force: true })
  cy.get('form')
    .find('[name="businessDescription"]')
    .type(
      'Cromwell Management Inc, 3488 Chemin de la Côte-des-Neiges, Montréal, Quebec +1 514-844-7275',
    )
})
