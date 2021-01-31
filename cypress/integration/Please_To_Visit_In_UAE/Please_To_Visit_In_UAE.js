/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home page', () => {
  cy.log('Launching Website ')

  cy.visit(Cypress.env('baseUrl'))
  cy.wait(3000)
  
});

When('User click on carousel-arrow carousel-arrow-next', () => {
  cy.contains('Places to Visit in UAE').scrollIntoView()
  cy.wait(4000)
 cy.xpath("//body/app-root[1]/div[1]/app-homepage[1]/main[1]/section[2]/div[3]/carousel[1]/div[2]/div[2]")
 .click()
 cy.wait(4000)
  
});

When('User click on carousel-arrow carousel-arrow-prev', () => {
  
  cy.xpath("//body/app-root[1]/div[1]/app-homepage[1]/main[1]/section[2]/div[3]/carousel[1]/div[2]/div[1]")
  .click()
  cy.wait(4000)
});

Then('User should able to click on it', () => {
 cy.contains('Have you booked already?').scrollIntoView()
 cy.wait(3000)
 cy.xpath("//a[contains(text(),'here')]").click()
 cy.wait(4000)
  
  
});
