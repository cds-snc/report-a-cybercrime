Feature: Test the cancellation workflow in english
  I want to cancel an online investgation report

  Scenario: Home page
    Given I open the report home page
    When I click on create a report button
    Then I read before you start instructions
    And I click continue without checking consent
    Then "Check the box to accept the terms of the Privacy statement." should be shown
    Then I click "Cancel report" 

   Scenario: Cancel the report
    Given "Cancel report?" should be shown
    When I confirm the cancellation 

  Scenario: Give a feedback on cancellation
    Given "Thank you for trying our new website." should be shown
    When I click on Tell us more

   Scenario: Fill out a feed back form
    Given "Please help us improve this service" should be shown
    When I give the feedback
    Then "Thank you for helping us improve this service!" should be shown