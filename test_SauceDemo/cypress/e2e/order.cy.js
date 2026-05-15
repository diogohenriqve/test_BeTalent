describe('Order produtos', () => {
    
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });
    
       
    it('Ordenando a lista', () => {
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
        //botão de filtros
        cy.get('[data-test="product-sort-container"]').select('Name (A to Z)')
        cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        cy.get('[data-test="product-sort-container"]').select('Price (high to low)')
        
        //logout
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
    });
    
});