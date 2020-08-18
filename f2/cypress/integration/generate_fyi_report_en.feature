 @smoke
Feature: Test the entire report workflow in english
  I want to create an online investgation report
  
  Scenario: Home page
    Given I open the report home page
    When I click on create a report button
    Then I click continue without checking consent
    Then "Check the box to accept the terms of the Privacy statement." should be shown
    When I check the consent checkbox
    Then I click "Continue"

  Scenario: What happened
    Given "Tell us about the scam or computer crime" should be shown
    When I fill to Whathappened page forms
    Then I click "Continue"

  Scenario: Attach supporting evidence
    Given "Attach supporting evidence" should be shown
    When I fill AttachSupportingEvidence page forms
    Then I click "Continue"

  Scenario: your location
    Given "Enter your location" should be shown
    When I fill to yourLocation page forms
    Then I click "Continue"

  Scenario: your contact details
    Given "Enter your contact details" should be shown
    When I fill yourContactDetails page forms
    Then I click "Continue"

  Scenario: Review  your report and  capture a screenshot
    Given "Review your report" should be shown
    Then Take summary page screenshot
    Then I click submit report

  Scenario: Confirm Report ID is generated
    Then "Thank you for reporting" should be shown
    And "Your reference number:" should be shown
