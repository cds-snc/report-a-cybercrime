Feature: Consent

  I want to create an online investgation report

  Scenario: Home page
    Given I open the report home page
    Then Inject axe and check for accessibility issues
    When I click on create a report button
    When I read before you start instructions
    And I check the consent checkbox
    Then "How did the incident start?" should be shown