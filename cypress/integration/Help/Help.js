/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home page', () => {
  
  cy.visit(Cypress.env('baseUrl'))
  cy.wait(3000)
});
When('User click on Help Icon and user should navigate to Help page', () => {
  cy.get('.navbar-toggle').click()
  cy.wait(2000)
  cy.xpath("//a[contains(text(),'Help')]")
  .click({force:true})
  cy.wait(1000)
  // cy.xpath("//a[@class='navbar-toggle active']").click({force:true})
  // cy.wait(2000)
});
When('User click on specific Question arrow', () => {
cy.xpath("//body/app-root[1]/app-help-page[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[2]/app-faq[1]/div[1]/div[1]/p-accordion[1]/div[1]/div[1]/p-accordiontab[3]/div[1]/a[1]/span[1]").click({force:true})
cy.xpath(3000)
cy.xpath("//body/app-root[1]/app-help-page[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[2]/app-faq[1]/div[1]/div[1]/p-accordion[1]/div[1]/div[4]/p-accordiontab[1]/div[1]/a[1]/span[1]")
.click({force:true})
cy.wait(4000)
});

Then('User should able to see complete content of Answer', () => {
 // cy.xpath("//span[@class='ui-accordion-toggle-icon pi pi-fw pi-chevron-down']").click({force:true})
  cy.xpath(2000)
});
