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
  cy.wait(2000)
});

When('User click on About US Option', () => {
  cy.xpath("//a[contains(text(),'About Us')]").click()
  cy.wait(15000)
});

Then('User should able to navigate to About Us page', () => {
  // TODO: implement step
});
