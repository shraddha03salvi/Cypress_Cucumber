/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home page of WebSite and click on Manage Booking Option', () => {
  cy.visit('http://stg.beno.com')
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

When('User navigate to {string} Page and Enter Email Address in Text field', () => {
  cy.get('#email').type('dhatavkarshraddha@gmail.com')
  cy.wait(2000)
});

When('User click on Submit Button and {string} message is display', () => {
  cy.xpath("//button[contains(text(),'Submit')]").click({force:true})
  cy.wait(2000)
});

Then('User click on Back Button and Naviagte to {string} page', () => {
  cy.get('#back').click({force:true})
  cy.wait(2000)
  cy.xpath("//a[@class='navbar-toggle active']").click({force:true})
  cy.wait(2000)
});
