describe('Entire form from filling testing...', function () {
    /**
    ----------------------------------------------------
    Manual filling workflow route table configurations
    ----------------------------------------------------
    */
    it('starting page', function () {
        cy.visit('https://report-a-scam.cds-snc.ca')
    });

    it('Language', function() {
        cy.contains('Français').first().click({force: true});
    });

    it('Signaler maintenant', function () {
        cy.contains('Signaler maintenant').first().click({force: true});
    });

    it('Commencer le rapport', function () {
        cy.contains('Commencer le rapport').first().click({force: true});
    });

    it('Votre confidentialité', function () {
        cy.contains('J’accepte les conditions').click({force: true});
        cy.get('button[type=submit]').click({force: true})
    });

    it ('Comment incident commencé?',function() {
        cy.contains('Par courriel').click({force: true});
        cy.get('textarea[name="email"]').first().type('suspect@gmail.com');
        cy.contains('Au téléphone').click({force: true});
        cy.get('textarea[name="phone"]').first().type('1-800-000-0000');
        cy.contains('Sur un site Web').click({force: true});
        cy.get('textarea[name="online"]').first().type('https://wwww.suspect.com');
        cy.contains('Sur un logiciel').click({force: true});
        cy.get('textarea[name="application"]').first().type('nom inconnu');
        cy.contains('Autre').click({force: true});
        cy.get('textarea[name="others"]').first().type('en personne');

    });

    it ('Quand incident commencé?',function() {
        cy.contains('Au cours du dernier mois').click({force: true});
    });

    it ('Combien de fois',function() {
        cy.contains('Plusieurs fois').click({force: true});
        cy.get('button[type=submit]').click({force: true});
    });

    it ('Quelles les répercussions',function() {
        cy.contains('Argent ou finances').click({force: true});
        cy.contains('Données personnelles').click({force: true});
        cy.contains('Appareils ou comptes').click({force: true});
        cy.contains('Ressources d’entreprise').click({force: true});
        cy.contains('Autre').click({force: true});
        cy.get('input[name="optionOther"]').first().type('Famille');
        cy.get('button[type=submit]').click({force: true});
    });

    it ('Répercussions sur votre argent',function() {
        cy.contains('le suspect vous a-t-il demandé?').click({force: true});
        cy.get('input[name="demandedMoney"]').first().type('500');
        cy.contains('le suspect a-t-il volé?').click({force: true});
        cy.get('input[name="moneyTaken"]').first().type('500');
        cy.contains('Transfert électronique').click({force: true});
        cy.contains('Carte de crédit').click({force: true});
        cy.contains('Carte-cadeau').click({force: true});
        cy.contains('Argent comptant').click({force: true});
        cy.contains('Autre').click({force: true});
        cy.get('input[name="methodOther"]').first().type(' Certified cheque');
        cy.contains('Quand les transactions ont-elles eu lieu?').click({force: true});
        cy.get('input[name="transactionDate"]').first().type('November 23, 2019');
        cy.contains('Dites-nous en plus').click({force: true});
        cy.get('textarea').first().type('Dites-nous en plus');
        cy.get('button[type=submit]').click({force: true});
    });

    it ('Quel est le type des informations qui vous ont été demandées?',function() {
        cy.contains('Informations sur la carte de crédit').click({force: true});
        cy.contains('Date de naissance').click({force: true});
        cy.contains('Adresse du domicile').click({force: true});
        cy.contains('assurance sociale').click({force: true});
        cy.contains('Autre').click({force: true});
        cy.get('input[name="infoReqOther"]').first().type('Banque Account');

        //cy.get(checkbox[type=]'Informations sur la carte de crédit').within('typeOfInfoObtained').click({force:true});
        //cy.get("typeOfInfoObtained.creditCard").then(elem => {
        //    elem.getAttribute("typeOfInfoObtained.creditCard");
        //cy.get("typeOfInfoObtained.creditCard").click({force: true});
        cy.get('button[type=submit]').click({force: true});
        
    });


    it ('Répercussions sur vos appareils ou vos comptes',function() {
        cy.get('input[name="deviceOrAccount"]').first().type('Iphone 7');
        cy.get('textarea[name="devicesTellUsMore"]').first().type('Fournissez d’autres détails sur la façon dont vos appareils ou vos comptes ont été affectés');
        cy.get('button[type=submit]').click({force: true});
    });

    it ('Répercussions sur votre entreprise',function() {
        cy.get('textarea[name="business"]').first().type('Réputation et clients');
        cy.get('button[type=submit]').click({force: true});
    });

    it ('Que s’est-il passé?',function() {
        cy.get('textarea[name="whatHappened"]').first().type('les menaces que vous avez reçues');
        cy.get('button[type=submit]').click({force: true});
    });

    it ('Renseignements sur le suspect',function() {
        cy.get('textarea[name="suspectClues"]').first().type('Pour qui la personne est-elle fait passer?');
        cy.get('textarea[name="suspectClues2"]').first().type('A quel endroit vous a-t-on demandé envoyer quelque chose');
        cy.get('textarea[name="suspectClues3"]').first().type('Vous souvenez-vous autre chose?');
        cy.get('button[type=submit]').click({force: true});
    });

    it('Preuves à appui', function () {
        // Testing automatic file upload
        const fileName = 'marchesurciel-lucille.jpg';
        cy.fixture(fileName).then(fileContent => {
            cy.get('#uploader').upload({ fileContent, fileName, mimeType: 'image/jpg' });
        });
        cy.wait(1000)
        cy.get('form').submit();

    });

    it ('Votre lieu',function() {
        cy.get('input[name="postalCode"]').first().type('K2A 4R0');
        cy.get('input[name="cityTown"]').first().type('Montreal');
        cy.get('button[type=submit]').click({force: true});
    });

    it ('Vos coordonnées',function() {
        cy.get('input[name="email"]').first().type('hong@rcmp-grc.gc.ca');
        cy.get('input[name="phone"]').first().type('613-993-0815');
        cy.get('button[type=submit]').click({force: true});
    });

    it ('Vos Révisez votre rapport',function() {
        cy.screenshot();
        cy.get('textarea[name="tellUsMore"]').first().type('Vous souvenez-vous autre chose?');
        cy.get('button[type=submit]').click({force: true});
        cy.screenshot();  
    }); 
    
})