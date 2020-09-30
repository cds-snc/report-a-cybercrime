import { When } from 'cypress-cucumber-preprocessor/steps'

When('I fill Whatcouldbeaffected page forms', () => {
  cy.get('form')
    .find('[value="whatWasAffectedForm.financial"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="whatWasAffectedForm.personalInformation"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="whatWasAffectedForm.devices"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="whatWasAffectedForm.business_assets"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="whatWasAffectedForm.other"]')
    .check({ force: true })
})

When('I fill Whatcouldbeaffected12 page forms', () => {
  cy.get('form')
    .find('[value="whatWasAffectedForm.financial"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="whatWasAffectedForm.personalInformation"]')
    .check({ force: true })
})

When('I fill Whatcouldbeaffected1 page forms', () => {
  cy.get('form')
    .find('[value="whatWasAffectedForm.financial"]')
    .check({ force: true })
})

When('I fill Whatcouldbeaffected2 page forms', () => {
  cy.get('form')
    .find('[value="whatWasAffectedForm.personalInformation"]')
    .check({ force: true })
})

When('I fill Whatcouldbeaffected3 page forms', () => {
  cy.get('form')
    .find('[value="whatWasAffectedForm.devices"]')
    .check({ force: true })
})

When('I fill Whatcouldbeaffected4 page forms', () => {
  cy.get('form')
    .find('[value="whatWasAffectedForm.business_assets"]')
    .check({ force: true })
})

When('I fill Whatcouldbeaffected5 page forms', () => {
  cy.get('form')
    .find('[value="whatWasAffectedForm.other"]')
    .check({ force: true })
})
