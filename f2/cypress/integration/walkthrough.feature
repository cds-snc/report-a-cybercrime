Feature: Consent

  I want to create an online investgation report

  @smoke
  Scenario: Home page
    Given I open the report home page
    When I click on create a report button
    When I read before you start instructions
    When I click continue without checking consent
    Then "Please accept the terms of the Privacy statement" should be shown
    And I check the consent checkbox
    Then "How did the incident start?" should be shown