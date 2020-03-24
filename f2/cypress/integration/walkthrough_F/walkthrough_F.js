
Given('I open the report home page', () => {
    cy.visit(Cypress.env('staging'))
});

When ('I change language',() => {
    cy.contains('Français').first().click({force: true});
    cy.contains('Signaler maintenant').first().click({force: true});
});

When('I read before you start instructions', () => {
    cy.contains('Commencer le rapport').first().click({force: true});
});

When('I click continue without checking consent', () => {
    cy.contains('Continuer').first().click({force: true});
});

When('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I check the consent checkbox', () => {
    cy.get('form').find('[name="consentOptions"]').check({ force: true })
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to howdiditstart page fill all forms', () => {

    cy.get('form').find('[value="howDidTheyReachYou.email"]').check({ force: true })
    cy.get('form').find('[id="email"]').type('suspectFrench@magma.com')
    cy.get('form').find('[value="howDidTheyReachYou.phone"]').check({ force: true })
    cy.get('form').find('[id="phone"]').type('1-800-000-1111')
    cy.get('form').find('[value="howDidTheyReachYou.online"]').check({ force: true })
    cy.get('form').find('[id="online"]').type('http://www.suspectFrench.com')
    cy.get('form').find('[value="howDidTheyReachYou.app"]').check({ force: true })
    cy.get('form').find('[id="application"]').type('noms d’applications où vous avez communiqué Application')
    cy.get('form').find('[value="howDidTheyReachYou.others"]').check({ force: true })
    cy.get('form').find('[id="others"]').type('Une publicité')
    cy.get('form').find('[id="startDay"]').type('26')
    cy.get('form').find('[id="startMonth"]').type('09')
    cy.get('form').find('[id="startYear"]').type('2019')
    cy.get('form').find('[value="howManyTimes.severalTimes"]').check({ force: true })
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to Whatcouldbeaffected page fill all forms', () => {
    cy.get('form').find('[value="whatWasAffectedForm.financial"]').check({ force: true })
    cy.get('form').find('[value="whatWasAffectedForm.personal_information"]').check({ force: true })
    cy.get('form').find('[value="whatWasAffectedForm.devices"]').check({ force: true })
    cy.get('form').find('[value="whatWasAffectedForm.business_assets"]').check({ force: true })
    cy.get('form').find('[value="whatWasAffectedForm.other"]').check({ force: true })
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to Howwereyourmoney page fill all forms', () => {
    cy.get('form').find('[id="demandedMoney"]').type('$10000 CAD')
    cy.get('form').find('[id="moneyTaken"]').type('$5000 CAD')
    cy.get('form').find('[value="methodPayment.eTransfer"]').check({ force: true })
    cy.get('form').find('[value="methodPayment.creditCard"]').check({ force: true })
    cy.get('form').find('[value="methodPayment.giftCard"]').check({ force: true })
    cy.get('form').find('[value="methodPayment.cash"]').check({ force: true })
    cy.get('form').find('[value="methodPayment.other"]').check({ force: true })
    cy.get('form').find('[id="methodOther"]').type('Certified Cheque')
    cy.get('form').find('[id="transactionDay"]').type('02')
    cy.get('form').find('[id="transactionMonth"]').type('02')
    cy.get('form').find('[id="transactionYear"]').type('2019')
    cy.get('form').find('[id="tellUsMore"]').type('Fournissez des détails sur ce qui a été dit ou fait pour que cela se produise')
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

when ('I navigate to Howwaspersonalinformationaffected page fill all forms', () => {
    cy.get('form').find('[value="typeOfInfoReq.creditCard"]').check({ force: true })
    cy.get('form').find('[value="typeOfInfoReq.dob"]').check({ force: true })
    cy.get('form').find('[value="typeOfInfoReq.homeAddress"]').check({ force: true })
    cy.get('form').find('[value="typeOfInfoReq.sin"]').check({ force: true })
    cy.get('form').find('[value="typeOfInfoReq.other"]').check({ force: true })
    cy.get('form').find('[id="infoReqOther"]').type('Passeport')
    cy.get('form').find('[value="typeOfInfoObtained.creditCard"]').check({ force: true })
    cy.get('form').find('[value="typeOfInfoObtained.dob"]').check({ force: true })
    cy.get('form').find('[value="typeOfInfoObtained.homeAddress"]').check({ force: true })
    cy.get('form').find('[value="typeOfInfoObtained.sin"]').check({ force: true })
    cy.get('form').find('[value="typeOfInfoObtained.other"]').check({ force: true })
    cy.get('form').find('[id="infoObtainedOther"]').type('Passeport')
    cy.get('form').find('[id="tellUsMore"]').type('Comment vous a-t-on demandé et soutiré des informations')
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate Howwereyourdevicesaffected page fill all forms', () => {

    cy.get('form').find('[id="device"]').type('tablette Surface')
    cy.get('form').find('[id="account"]').type('Netflix')
    cy.get('form').find('[id="devicesTellUsMore"]').type('Comment vos appareils ou vos comptes ont-ils été affectés')
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to Howyourbusinessaffected page fill all forms', () => {

    cy.get('form').find('[id="business"]').type('actifs, réputation, clients')
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to Whathappened page fill all forms', () => {

    cy.get('form').find('[id="whatHappened"]').type('Décrivez la série d’événements. Commencez par le début. N’oubliez pas d’indiquer ce qu’on vous a demandé, promis ou volé, ou les menaces que vous avez reçues.')
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to Addsuspectclues page fill all forms', () => {
    cy.get('form').find('[id="suspectClues1"]').type('Nom du suspect')
    cy.get('form').find('[id="suspectClues2"]').type('Adresse du suspect')
    cy.get('form').find('[id="suspectClues3"]').type('Pensez à fournir des indices tels que l’heure de la journée, la langue utilisée pour communiquer et tout autre petit détail qui pourrait aider à identifier le suspect')
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to AttachSupportingEvidence page fill all forms', () => {
    const fileName1 = 'crime.jpg';
    const fileName2 = 'fake.jpg';
    const fileName3 = 'crime.jpg';

    cy.get('#uploader').uploadFile(fileName1, 'image/jpeg');
    cy.wait(1000)

    cy.get('#uploader').uploadFile(fileName2, 'image/jpeg');
    cy.wait(1000)

    cy.get('#uploader').uploadFile(fileName3, 'image/jpeg');
    cy.wait(1000)

    //cy.screenshot()
    cy.contains('Continue').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to yourLocation page fill all forms', () => {

    cy.get('form').find('[id="postalCode"]').type('K2G 6R2')
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to yourContactDetails page fill all forms', () => {

    cy.get('form').find('[id="fullName"]').type('prénom nome de famille')
    cy.get('form').find('[id="email"]').type('lmcbhvu@gmail.com')
    cy.get('form').find('[id="phone"]').type('613-000-1234')
    cy.contains('Continuer').first().click({force: true});
});

Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});

When('I navigate to summary page fill all forms', () => {
    cy.contains('Soumettre le rapport').first().click({force: true});
});
