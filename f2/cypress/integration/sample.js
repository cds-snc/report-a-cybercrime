describe('Entire form form filling testing...', function () {
    /**
    ----------------------------------------------------
    Manual filling workflow route table configurations
    ----------------------------------------------------
    */
    it('The home page accessibility checks', function () {
        cy.visit("http://localhost:3000/howdiditstart")
    });

    it('How did it start', function () {
        cy.get('[value="howDidTheyReachYou.email"]').check({force: true})
        cy.get('[value="howDidTheyReachYou.phone"]').check({force: true})
        cy.get('[value="howDidTheyReachYou.online"]').check({force: true})
        cy.get('[value="howDidTheyReachYou.app"]').check({force: true})
        cy.get('[value="howDidTheyReachYou.others"]').check({force: true})

        //cy.get('textarea[name="email"]').first().type(Cypress.config('email'))
        //cy.get('button').click()
    });


})
