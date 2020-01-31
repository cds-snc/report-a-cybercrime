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
        cy.visit(Cypress.env('local'))
        cy.injectAxe()
        cy.checkA11y()
    });

    it('Introduction', function () {
        cy.get('button').click();
    });

    it('Privacy consent', function () {
        cy.get('#id-0').click({ force: true })
        cy.get('button').click()
    });

    it('How did it start', function () {
        cy.get('#id-1').click({ force: true })
        cy.get('textarea[name="email"]').first().type(Cypress.config('email'))
        cy.get('#id-2').click({ force: true })
        cy.get('textarea[name="phone"]').first().type(Cypress.config('phone'))
        cy.get('#id-3').click({ force: true })
        cy.get('textarea[name="online"]').first().type(Cypress.config('string'))
        cy.get('#id-4').click({ force: true })
        cy.get('textarea[name="application"]').first().type(Cypress.config('string'))
        cy.get('#id-5').click({ force: true })
        cy.get('textarea[name="others"]').first().type(Cypress.config('string'))
        cy.get('#id-6').click({ force: true })
        cy.get('#id-11').click({ force: true })
        cy.get('button').click()
    });

    it('What was affected', function () {
        cy.get('#id-13').click({ force: true })
        cy.get('#id-14').click({ force: true })
        cy.get('#id-15').click({ force: true })
        cy.get('#id-16').click({ force: true })
        cy.get('button').click()
    });

    it('money lost', function () {
        cy.get('input[name="demandedMoney"]').first().type(Cypress.config('string'))
        cy.get('input[name="moneyTaken"]').first().type(Cypress.config('string'))
        cy.get('input[name="methodPayment"]').first().type(Cypress.config('string'))
        cy.get('input[name="transactionDate"]').first().type(Cypress.config('string'))
        cy.get('input[name="demandedMoney"]').first().type(Cypress.config('string'))
        cy.get('textarea[name="tellUsMore"]').first().type(Cypress.config('string'))
        cy.get('button').click()
    });

    it('Information', function () {
        cy.get('#id-18').click({ force: true })
        cy.get('#id-19').click({ force: true })
        cy.get('#id-20').click({ force: true })
        cy.get('#id-21').click({ force: true })
        cy.get('#id-22').click({ force: true })
        cy.get('#id-23').click({ force: true })
        cy.get('#id-24').click({ force: true })
        cy.get('#id-25').click({ force: true })
        cy.get('#id-26').click({ force: true })
        cy.get('#id-27').click({ force: true })
        cy.get('input[name="infoObtainedOther"]').first().type(Cypress.config('string'))
        cy.get('textarea[name="tellUsMore"]').first().type(Cypress.config('string'))
        cy.get('button').click()
    });

    it('Devices', function () {
        cy.get('input[name="deviceOrAccount"]').first().type(Cypress.config('string'))
        cy.get('textarea[name="devicesTellUsMore"]').first().type(Cypress.config('string'))
        cy.get('button').click()
    });

    it('Business', function () {
        cy.get('textarea[name="business"]').first().type(Cypress.config('string'))
        cy.get('button').click()
    });

    it('What Happened', function () {
        cy.get('textarea[name="whatHappened"]').first().type(Cypress.config('string'))
        cy.get('button').click()
    });

    it('Suspect Clues', function () {
        cy.get('textarea[name="suspectClues"]').first().type(Cypress.config('string'))
        cy.get('textarea[name="suspectClues2"]').first().type(Cypress.config('string'))
        cy.get('textarea[name="suspectClues3"]').first().type(Cypress.config('string'))
        cy.get('button').click()
    });

    it('Uploading an evidence file...', function () {
        // Testing automatic file upload
        const fileName = 'marchesurciel-lucille.jpg';
        cy.fixture(fileName).then(fileContent => {
            cy.get('#uploader').upload({ fileContent, fileName, mimeType: 'image/jpg' });
        });
        cy.wait(1000)
        cy.get('form').submit()

    });

    it('Location', function () {
        cy.get('input[name="postalCode"]').first().type(Cypress.config('postcode'))
        cy.get('input[name="cityTown"]').first().type(Cypress.config('city'))
        cy.get('button').click()

    });

    it('Contact Info', function () {
        cy.get('input[name="email"]').first().type(Cypress.config('email'))
        cy.get('input[name="phone"]').first().type(Cypress.config('phone'))
        cy.get('button').click()

    });

    it('Confirmation Screenshot', function () {
        cy.screenshot()

    });

})
