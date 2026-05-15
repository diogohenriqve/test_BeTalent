describe('Compra completa', () => {
    
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });
    
       
    it('Compra completa', () => {
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
        //Adicionando ao carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        //Clicando no carrinho
        cy.get('[data-test="shopping-cart-link"]').click()

        //Confirmando compra no carrinho
        cy.contains('Checkout').click()

        //Preenchendo dados para entrega da compra
        cy.get('[data-test="firstName"]').type('Diogo Henrique')
        cy.get('[data-test="lastName"]').type('Santana de Jesus')
        cy.get('[data-test="postalCode"]').type('08881999')

        cy.contains('Continue').click()

        //Finalizando a compra
        cy.contains('Finish').click()
        
        //Voltando para o menu principal
        cy.contains('Back Home').click()
        
        //logout
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        
    });
    
});