/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home page', () => {
  cy.log('Launching Website ')

  cy.visit(Cypress.env('baseUrl'))
  cy.wait(3000)
});

When('User Click on Office Location Link', () => {
  cy.xpath("//a[contains(text(),'Office Location')]").click()
  cy.wait(3000)
  
  
});

When('User click Blog Link', () => {
  // TODO: implement step
});

Then('User Click My Account Link', () => {
  // TODO: implement step
});
