Feature: Accessibility Checks
  I want to check for Accessibility issues and pass the data to a11y dashboard
  @smoke
  Scenario: Home page
    Given I open the report home page
    Then Inject axe and check for accessibility issues
