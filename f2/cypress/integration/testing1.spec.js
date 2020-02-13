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
})