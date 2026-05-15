describe('Remoção produto do carrinho', () => {
    
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });
    
       
    it('Ordenando a lista', () => {
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()

        //Adicionando ao carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        //Clicando no carrinho
        cy.get('[data-test="shopping-cart-link"]').click()

        //Clicando remover
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()

        //Voltando ao menu home
        cy.get('[data-test="continue-shopping"]').click()

        //logout
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()

    });
    
});