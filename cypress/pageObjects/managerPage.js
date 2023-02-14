class managerPage{

    elements = { 
         addCustomerBtn : () => cy.get('[ng-class="btnClass1"]'),      
         openAccBtn : () => cy.get('[ng-class="btnClass2"]'),      
         viewCustomerBtn : () => cy.get('[ng-class="btnClass3"]')
    }

  }
  module.exports = new managerPage();