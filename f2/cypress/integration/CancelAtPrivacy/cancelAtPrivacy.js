
import { Given, After, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
// Hooks for repeated commands/rules
After(() => {
 cy.reportA11y();
});

Given('I open the report home page', () => {
    cy.visit(Cypress.env('website'))
});

When('I click on create a report button', () => {
    cy.contains('Report now').first().click({force: true});
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

Then('I click {string}', () => {
    cy.contains("Cancel report").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When ('I confirm the cancellation', () => {
    cy.get('button').contains('Cancel report').first().click({force: true});
    //cy.contains("Cancel report").first().click({force: true});
});

Given('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When ('I click on Tell us more', () => {
    cy.contains('Tell us more').first().click({force: true});
    // Do nothing
});

When('I give the feedback', () => {
    cy.get('form').find('[value="finalFeedback.wasServiceHard.neutral"]').check({ force: true })
    cy.get('form').find('[value="finalFeedback.wouldYouUseAgain.yes"]').check({ force: true })
    cy.get('form').find('[name="howCanWeDoBetter"]').type('testing on cancellation feeback')
    cy.contains("Submit").first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});