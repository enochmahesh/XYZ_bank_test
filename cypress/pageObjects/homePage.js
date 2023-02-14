class homePage{

    elements = { 
         customerLogin : () => cy.get('.borderM > :nth-child(1) > .btn'),      
         managerLogin : () => cy.get(':nth-child(3) > .btn'),    
         homeBtn : () => cy.get('.home')
     }
  }
  module.exports = new homePage();