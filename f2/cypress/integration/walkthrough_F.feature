Feature: Consent

  I want to create an online investgation report

  @smoke
  Scenario: Home page
    Given I open the report home page
    When I change language
    When I click on create a report button
    Then "Avant de commencer" should be shown
    When I read before you start instructions
    When I click continue without checking consent
    When "Veuillez accepter les conditions de la Déclaration de confidentialité." should be shown
    And I check the consent checkbox
    Then "Comment l’incident a-t-il commencé?" should be shown
    When I navigate to howdiditstart page fill all forms 
    Then "D’après vous, quelles pourraient être les répercussions?" should be shown
    When I navigate to Whatcouldbeaffected page fill all forms
    Then "Répercussions sur votre argent ou vos finances" should be shown
    When I navigate to Howwereyourmoney page fill all forms
    Then "Répercussions sur vos données personnelles" should be shown
    When I navigate to Howwaspersonalinformationaffected page fill all forms
    Then "Répercussions sur vos appareils ou vos comptes" should be shown
    When I navigate Howwereyourdevicesaffected page fill all forms
    Then "Répercussions sur votre entreprise" should be shown
    When I navigate to Howyourbusinessaffected page fill all forms 
    Then "Que s’est-il passé?" should be shown
    When I navigate to Whathappened page fill all forms
    Then "Indices sur le suspect" should be shown 
    When I navigate to Addsuspectclues page fill all forms
    Then "Preuves à l'appui" should be shown
    When I navigate to AttachSupportingEvidence page fill all forms
    Then "Votre emplacement géographique" should be shown
    When I navigate to yourLocation page fill all forms
    Then "Vos coordonnées" should be shown
    When I navigate to yourContactDetails page fill all forms
    Then "Révisez votre rapport" should be shown
    When I navigate to summary page fill all forms
    Then "Merci de votre signalement" should be shown
  
