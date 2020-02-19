describe('Entire form form filling testing...', function () {
    /**
    ----------------------------------------------------
    Manual filling workflow route table configurations
    ----------------------------------------------------

    */
    it('The home page accessibility checks', function () {
        /*
            The follwoing  environment variable can be called
            depending on the base URL you define for your test
            Reference file:   /cypress.json
            -------------------------------------------
            Local - Cypress.env('local')
            Production Url - Cypress.env('production')
            -------------------------------------------
        */
        cy.visit(Cypress.env('production'))

    });

    it('Signaler maintenant', function () {
        cy.contains('Report now').first().click({force: true});
    });

    it('Introduction', function () {
        cy.contains('Start report').first().click({force: true});
    });

    it('Privacy consent', function () {
        cy.get('#id-7').click({ force: true })
        cy.contains('Continue').first().click({force: true});
    });

    it('How did it start', function () {
        cy.fixture('example.json').then((user)  => {
            var phone = user.phone
            var email = user.email
            var online = user.online
            var app = user.app
            var other = user.other
            cy.get('#id-9').click({ force: true })
            cy.get('textarea[name="email"]').first().type('email')
            cy.get('#id-10').click({ force: true })
            cy.get('textarea[name="phone"]').first().type(phone)
            cy.get('#id-11').click({ force: true })
            cy.get('textarea[name="online"]').first().type(online)
            cy.get('#id-12').click({ force: true })
            cy.get('textarea[name="application"]').first().type(app)
            cy.get('#id-13').click({ force: true })
            cy.get('textarea[name="others"]').first().type(other)
            cy.get('#id-15').click({ force: true })
            cy.get('#id-21').click({ force: true })
            //cy.contains('Continue').first().click({force: true});
        })
        cy.contains('Continue').first().click({force: true});
    });

    it('What was affected', function () {
        cy.get('#id-30').click({ force: true })
        cy.get('#id-31').click({ force: true })
        cy.get('#id-32').click({ force: true })
        cy.get('#id-33').click({ force: true })
        cy.get('#id-34').click({ force: true })
        cy.fixture('example.json').then((user)  => {
            var body = user.body
            cy.get('input[name="optionOther"]').first().type(body)
        })
        cy.contains('Continue').first().click({force: true});
    });

    it('money lost', function () {
        cy.fixture('example.json').then((user)  => {
            var moneyDemand = user.moneyDemand
            var moneyTaken = user.moneyTaken   
            cy.get('input[name="demandedMoney"]').first().type(moneyDemand)
            cy.get('input[name="moneyTaken"]').first().type(moneyTaken)
        })
        cy.get('#id-35').click({ force: true })
        cy.get('#id-36').click({ force: true })
        cy.get('#id-37').click({ force: true })
        cy.get('#id-38').click({ force: true })
        cy.get('#id-39').click({ force: true })
        cy.fixture('example.json').then((user)  => {
            var transDate = user.transactionDate
            var othermethod = user.othermethod
            var tellUsMore = user.tellUsMore 
            cy.get('input[name="methodOther"]').first().type(othermethod)
            cy.get('input[name="transactionDate"]').first().type(transDate)
            cy.get('textarea[name="tellUsMore"]').first().type(tellUsMore)
        })
        cy.contains('Continue').first().click({force: true});
    });

    it('Information', function () {
       cy.get('#id-41').click({ force: true })
        cy.get('#id-42').click({ force: true })
        cy.get('#id-43').click({ force: true })
        cy.get('#id-44').click({ force: true })
        cy.get('#id-45').click({ force: true })
        //cy.fixture('example.json').then((user)  => {
        //    var infoReqOther = user.infoReqOther
        //    cy.get('input[name="infoReqOther"]').first().type(infoReqOther)
        //})
        cy.get('#id-46').click({ force: true })
        cy.get('#id-47').click({ force: true })
        cy.get('#id-48').click({ force: true })
        cy.get('#id-49').click({ force: true })
        cy.get('#id-50').click({ force: true })
        cy.fixture('example.json').then((user)  => {
            //var infoObtainOther = user.infoObtainOther
            var tellUs = user.tellUsMore
            //cy.get('input[name="infoObtainedOther"]').first().type(infoObtainOther)
            cy.get('textarea[name="tellUsMore"]').first().type(tellUs) 
        })
        cy.contains('Continue').first().click({force: true});
    });

    it('Devices', function () {
        cy.fixture('example.json').then((user)  => {
            var device = user.device
            var deviceMore = user.deviceMore
            cy.get('input[name="device"]').first().type(device)
            cy.get('textarea[name="devicesTellUsMore"]').first().type(deviceMore)
        })    
        cy.contains('Continue').first().click({force: true});
    });

    it('Business', function () {
        cy.get('textarea[name="business"]').first().type(Cypress.config('string'))
        cy.contains('Continue').first().click({force: true});
    });

    it('What Happened', function () {
        cy.get('textarea[name="whatHappened"]').first().type(Cypress.config('string'))
        cy.contains('Continue').first().click({force: true});
    });

    it('Suspect Clues', function () {
        cy.get('textarea[name="suspectClues1"]').first().type(Cypress.config('string'))
        cy.get('textarea[name="suspectClues2"]').first().type(Cypress.config('string'))
        cy.get('textarea[name="suspectClues3"]').first().type(Cypress.config('string'))
        cy.contains('Continue').first().click({force: true});
    });

    it('Uploading an evidence file...', function () {
        // Testing automatic file upload
        const fileName = 'marchesurciel-lucille.jpg';
        cy.fixture(fileName).then(fileContent => {
            cy.get('#uploader').upload({ fileContent, fileName, mimeType: 'image/jpg' });
        });
        cy.wait(1000)
        //cy.get('form').submit();
        //cy.get('button').contains('Submit').first().click({force: true});
        cy.contains('Continue').first().click({force: true});

    });

    it('Location', function () {
        cy.get('input[name="postalCode"]').first().type(Cypress.config('postcode'))
        //cy.get('input[name="cityTown"]').first().type(Cypress.config('city'))
        cy.contains('Continue').first().click({force: true});

    });

    it('Contact Info', function () {
        cy.get('input[name="fullName"]').first().type('Tester Name')
        cy.get('input[name="email"]').first().type(Cypress.config('email'))
        cy.get('input[name="phone"]').first().type(Cypress.config('phone'))
        cy.contains('Continue').first().click({force: true});

    });

    it('Confirmation Screenshot', function () {
        cy.screenshot()

    });

})
