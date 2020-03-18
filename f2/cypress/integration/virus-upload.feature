Feature: Virus scanning test
  I want to upload a virus infected file to test virus scanning
  Scenario: Home page
    Given I open the report home page
    When I click on create a report button
    When I read before you start instructions
    When I click continue without checking consent
    When "Please accept the terms of the Privacy statement" should be shown
    And I check the consent checkbox
    Then "How did the incident start?" should be shown
    When I navigate to howdiditstart page and click continue
    Then "What do you think could be affected?" should be shown
    When I navigate to Whatcouldbeaffected page and click continue
    Then "What happened?" should be shown
    When I navigate to Whathappened page and click continue
    Then "Add suspect clues" should be shown
    When I navigate to Addsuspectclues page and click continue
    Then "Attach supporting evidence" should be shown
    When upload the virus file
    Then "Enter your location" should be shown
    When I navigate to yourLocation page and click continue
    Then "Enter your contact details" should be shown
    When I navigate to yourContactDetails page and click continue
    Then "Review your report" should be shown
    When I navigate to summary page and click Submit
    Then "Thank you for reporting" should be shown
