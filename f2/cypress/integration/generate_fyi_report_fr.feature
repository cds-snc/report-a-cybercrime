 @smoke
Feature: Test the entire report workflow in french
  I want to create an online investgation report

  Scenario: Home page
    Given I open the report home page
    When I change the language
    Then I click continue without checking consent
    Then "Cochez la case pour accepter les conditions de la Déclaration de confidentialité." should be shown
    When I check the consent checkbox
    Then I click "Continuer"


  Scenario: What happened?
    Given "Parlez-nous de la fraude ou du crime informatique" should be shown
    When I fill Whathappened page forms
    Then I click "Continuer"

  Scenario: Attach supporting evidence
    Given "Preuves à l’appui" should be shown
    When I fill AttachSupportingEvidence page forms
    Then I click "Continuer"

  Scenario: your location
    Given "Votre emplacement géographique" should be shown
    When I fill yourLocation page forms
    Then I click "Continuer"

  Scenario: your contact details
    Given "Vos coordonnées" should be shown
    When I fill yourContactDetails page forms
    Then I click "Continuer"

  Scenario: Review  your report and  capture a screenshot
    Given "Révisez votre rapport" should be shown
    Then Take summary page screenshot
    Then I click submit report

  Scenario: Confirm Report ID is generated
    Then "Merci pour votre signalement" should be shown
    And "Votre numéro de référence :" should be shown