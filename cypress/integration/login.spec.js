describe('Login to Sauce Demo', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Should log in with correct credentials', () => {
        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('secret_sauce');
        cy.get('[data-test=login-button]').click();
        cy.get('span.title').should('have.text','Products');
    })
    it('Should fail to log in with incorrect credentials',() => {

    });
    it('Should fail to log in with a locked out user',() => {

    });
})