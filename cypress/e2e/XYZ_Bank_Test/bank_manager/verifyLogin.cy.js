const managerPage = require("../../../pageObjects/managerPage");

describe('Test Bank Manager Login', () => {

    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')     
        cy.managerLogin();
   })
   
    it('Verify Login successful', () => {        
        managerPage.elements.addCustomerBtn().should('be.visible');
        managerPage.elements.openAccBtn().should('be.visible');
        managerPage.elements.viewCustomerBtn().should('be.visible');
        })
})