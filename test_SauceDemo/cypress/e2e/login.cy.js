const { func } = require("assert-plus");

describe('Login Sauce Demo', () => {
    
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });
    
        it('Login', () => {
            loginSauceDemo("standard_user", "secret_sauce")
        });

        it('Login2', () => {
            loginSauceDemo("problem_user", "secret_sauce")
         });

        it('Login3', () => {
            loginSauceDemo("visual_user","secret_sauce")        
        });

    function loginSauceDemo(username, password){
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()

        //Logout
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
    }
});