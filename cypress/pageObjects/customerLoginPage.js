class customerLoginPage{

    elements = { 
         nameLbl : () => cy.get('label'),      
         namrDrpDwn : () => cy.get('#userSelect'),
         loginBtn : () => cy.get('form.ng-valid > .btn')
     }
  }
  module.exports = new customerLoginPage();