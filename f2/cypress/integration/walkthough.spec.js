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

    it('Manual filling forms', function () {
        cy.get('button').click();
    });

    it('Accepted ', function () {
     cy.get('button').click()
    });

    it('Accepted ', function () {
        cy.get('#id-0').click({ force: true })
        cy.get('button').click()
    });

    it('how did it start testing ', function () {
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
        cy.get('[name="whenDidItStart"]').click({ multiple: true })
        cy.get('#whenDidItStart.today').click({ force: true })


    });


})
