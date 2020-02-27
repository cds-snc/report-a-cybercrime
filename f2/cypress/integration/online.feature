Feature: Consent

  I want to create an online investgation report

  Scenario: Home page
    Given I open the report home page
    When I click on create a report button
    When I read before you start instructions
    When I click continue without checking consent
    When "Please accept the terms of the Privacy statement" should be shown
    And I check the consent checkbox
    Then "How did the incident start?" should be shown
    When I navigate to howdiditstart page fill all forms
    Then "What do you think could be affected?" should be shown
    When I navigate to Whatcouldbeaffected page fill all forms
    Then "How were your money or finances affected?" should be shown
    When I navigate to Howwereyourmoney page fill all forms
    Then "How were your devices or accounts affected?" should be shown
    When I navigate Howwereyourdevicesaffected page fill all forms
    Then "What happened?" should be shown
    When I navigate to Whathappened page fill all forms
    Then "Add suspect clues" should be shown
    When I navigate to Addsuspectclues page fill all forms
    Then "Attach supporting evidence" should be shown
    When I navigate to AttachSupportingEvidence page fill all forms
    Then "Enter your location" should be shown
    When I navigate to yourLocation page fill all forms
    Then "Enter your contact details" should be shown
    When I navigate to yourContactDetails page fill all forms
    Then "Review your report" should be shown
    When I navigate to summary page fill all forms
    Then "Thank you for reporting" should be shown
