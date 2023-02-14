import customerLoginPage from "../../../pageObjects/customerLoginPage";
import customerPage from "../../../pageObjects/customerPage";
import homePage from "../../../pageObjects/homePage";

describe('Test Customer Login', () => {

    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')     
        cy.customerLogin();   
   })
   
    it('Verify Login successful', () => {        
        customerPage.elements.welTxt().should('have.text',' Welcome Hermoine Granger !!');
        customerPage.elements.depositBtn().should('be.visible');
        customerPage.elements.transBtn().should('be.visible');
        customerPage.elements.withdrawBtn().should('be.visible');
        })

    it('Verify logout successful', () => {
        customerPage.elements.logoutBtn().click();
        customerLoginPage.elements.nameLbl().should('be.visible');
        })
})
   