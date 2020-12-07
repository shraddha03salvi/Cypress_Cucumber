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
});

When('User click on Contact US Option', () => {
  cy.xpath("//body/app-root[1]/app-help-page[1]/main[1]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]").click()
  cy.wait(2000)
});

Then('User should able to navigate to Contact Us page', () => {
 
  
});
