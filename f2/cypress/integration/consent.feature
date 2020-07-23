@regression
Feature: Consent

  I want to create an online investgation report
 
  Scenario: Home page
  Given I open the report home page
    Then Inject axe and check for accessibility issues
    When I click on create a report button
    When I read before you start instructions
    When I click continue without checking the consent
    Then "Check the box to accept the terms of the Privacy statement." should be shown
    Then check for accessibility issues
    And I check the consent checkbox
    Then "Report anonymously?" should be shown
    Then check for accessibility issues
    