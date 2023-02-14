import customerLoginPage from '../pageObjects/customerLoginPage.js';
import homePage from '../pageObjects/homePage.js';

Cypress.Commands.add('customerLogin', () => { 
    homePage.elements.customerLogin().click();
    customerLoginPage.elements.namrDrpDwn().select(1);
    customerLoginPage.elements.loginBtn().click();
 })

 Cypress.Commands.add('managerLogin', () => { 
    homePage.elements.managerLogin().click();
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })