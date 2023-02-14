class customerPage{

    elements = { 
         welTxt : () => cy.get('.borderM > :nth-child(1) > strong'),      
         logoutBtn : () => cy.get('.logout'),    
         transBtn : () => cy.get('[ng-class="btnClass1"]'),
         depositBtn : () => cy.get('[ng-class="btnClass2"]'),
         withdrawBtn : () => cy.get('[ng-class="btnClass3"]')
    }

  }
  module.exports = new customerPage();