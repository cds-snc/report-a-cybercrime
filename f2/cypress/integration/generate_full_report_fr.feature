@smoke
Feature: Test the entire report workflow in french
  I want to create an online investgation report
  
  Scenario: Home page
    Given I open the report home page
    When I change the language
    Then I read before you start instructions in French
    And I click continue without checking consent
    Then "Cochez la case pour accepter les conditions de la Déclaration de confidentialité." should be shown
    When I check the consent checkbox
    Then I click "Continuer"

Scenario: Report anonymously
    Given "Signaler anonymement?" should be shown
    When I fill NoReportAnonymously page forms
    Then I click "Continue"

Scenario: Who are you reporting for
    Given "Pour qui faites-vous le signalement?" should be shown
    When I fill WhoAreYouReportingBusiness in French page forms
    Then I click "Continue" 

  Scenario: How did it start
    Given "Comment l’incident a-t-il commencé?" should be shown
    When I fill howdiditstart in French page forms
    Then I click "Continuer"

Scenario: When did the incident happen
    Given "Quand est-ce que l'incident s'est produit ?" should be shown
    When I fill whendidithappennotsure page forms
    Then I click "Continue"

  Scenario: What could be affected
    Given "D’après vous, quelles pourraient être les répercussions?" should be shown
    When I fill Whatcouldbeaffected page forms
    Then I click "Continuer"

  Scenario: How were your money affected
    Given "Répercussions sur votre argent ou vos finances" should be shown
    When I fill Howwereyourmoney in French page forms
    Then I click "Continuer"

  Scenario: How was personal information affected
    Given "Répercussions sur vos données personnelles" should be shown
    When I fill Howwaspersonalinformationaffected in French page forms
    Then I click "Continuer"

  Scenario: How was your device affected
    Given "Répercussions sur vos appareils ou vos comptes" should be shown
    When I fill Howwereyourdevicesaffected in French page forms
    Then I click "Continuer"

  Scenario: How your business affected
    Given "Parlez-nous de votre entreprise ou organisation" should be shown
    When I fill Howyourbusinessaffected in French page forms
    Then I click "Continuer"

  Scenario: What happened?
    Given "Que s’est-il passé?" should be shown
    When I fill Whathappened in French page forms
    Then I click "Continuer"

  Scenario: Add suspect clues
    Given "Indices sur le suspect" should be shown
    When I fill Addsuspectclues in French page forms
    Then I click "Continuer"

  Scenario: Attach supporting evidence
    Given "Preuves à l’appui" should be shown
    When I fill AttachSupportingEvidence page forms
    Then I click "Continuer"

  Scenario: your location
    Given "Votre emplacement géographique" should be shown
    When I fill postalCode1 page forms
    Then I click "Continuer"

  Scenario: your contact details
    Given "Vos coordonnées" should be shown
    When I fill yourContactDetails page forms
    Then I click "Continuer"

  Scenario: Review  your report and  capture a screenshot
    Given "Révisez votre rapport" should be shown
    Then Take summary page screenshot
    Then I submit report in French

  Scenario: Confirm Report ID is generated
    Then "Merci pour votre signalement" should be shown
    And "Votre numéro de référence :" should be shown
