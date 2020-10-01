/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home page of WebSite', () => {
  
  cy.visit(Cypress.env('baseUrl'))
  cy.wait(2000)
});

When('User click on Manage Booking option', () => {
  cy.get('.navbar-toggle').click()
  cy.wait(2000)
  cy.xpath("//a[contains(text(),'Manage Booking')]").click()
  cy.wait(2000)
});

When('keep Blank Email address text field', () => {
  cy.get('#email').click()
  cy.wait(2000)
  cy.get('#bookingID').click
  cy.wait(2000)
});

Then('User click on submit and User should get Error message', () => {
  cy.get('#btnFindBooking').click({force:true})
  cy.wait(3000)
  cy.xpath("//a[@class='navbar-toggle active']").click({force:true})
});
