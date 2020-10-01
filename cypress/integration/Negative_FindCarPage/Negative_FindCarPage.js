/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home Page', () => {
  
  cy.visit(Cypress.env('baseUrl'))
  cy.wait(3000)
 
});

When('User keep blank Picking_up location Text field', () => {
  cy.xpath("//input[@placeholder='Dubai, United Arab Emirates (DXB-Dubai Intl.)']").click()
  //cy.wait(3000)
  //cy.xpath("//input[@class='ng-tns-c8-1 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']").clear({force: true})
});

When('Click on Find Car Button', () => {
 
  cy.wait(2000)
  cy.xpath("//span[contains(text(),'FIND CAR')]").click({ force: true })
  cy.wait(4000)
});

Then('Error message should display', () => {
  
  cy.log('User got error message')
  
});
