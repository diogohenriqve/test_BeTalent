describe('Navegação entre páginas', () => {
    
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });
    
       
    it('Navegação entre páginas', () => {
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()

        //Clicando no carrinho
        cy.get('[data-test="shopping-cart-link"]').click()

        //Voltando ao menu home
        cy.get('[data-test="continue-shopping"]').click()

        //Clicando no primeiro produto da lista
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()

        //Voltando para o menu principal
        cy.get('[data-test="back-to-products"]').click()

        //logout
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        

    });
    
});