/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home page of WebSite and click on Manage Booking Option', () => {
  cy.visit('https://stg.beno.com')
  cy.wait(2000)
  cy.get('.navbar-toggle').click()
  cy.wait(2000)
  cy.xpath("//a[contains(text(),'Manage Booking')]").click()
  cy.wait(2000)
});

When('User click on Forgot Your Booking ID link', () => {
  cy.xpath("//a[contains(text(),'*Forgot Your booking ID')]").click({force:true})
  cy.wait(2000)
});

When('User navigate to Forgot Your Booking ID Page and keep  Email Address Text field as Blank', () => {
  cy.get('#email').type('dhatavkarshraddha.com')
  cy.wait(2000)
});

When('User click on Submit Button', () => {
  cy.xpath("//button[contains(text(),'Submit')]").click({force:true})
  cy.wait(2000)
});

Then('User should get error message', () => {
  cy.log('get error message as : Email id is invalid')
});
