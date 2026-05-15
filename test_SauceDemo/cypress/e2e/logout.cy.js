describe('Logout', () => {
    
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });
    
       
    it('Logout', () => {
        cy.get('[data-test="username"]').type("error_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()

        
        //logout
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        

    });
    
});