/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home page', () => {
  cy.log('Launching Website and Select PickUp location')

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

When('User click on Terms & condition Option', () => {
  cy.xpath("//a[contains(text(),'Terms & Conditions')]").click()
  cy.wait(3000)
});

Then('User should able to navigate to Terms & condition', () => {
  
});
