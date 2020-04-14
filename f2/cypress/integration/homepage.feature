Feature: Accessibility Checks
  I want to check for Accessibility issues and pass the data to a11y dashboard
  @smoke
  Scenario: Local Home page
    Given I open the local report home page
    Then Inject axe and check for accessibility issues
