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

When('Enter Email address and Booking Id', () => {
  cy.get('#email').type('dhatavkarshraddha@gmail.com')
  cy.wait(2000)
  cy.get('#bookingID').type('bdh234')
  cy.wait(2000)
  
});

Then('User click on submit and User should navigate to Booking ID page', () => {
  cy.get('#btnFindBooking').click({force:true})
  cy.wait(3000)
  cy.xpath("//a[@class='navbar-toggle active']").click({force:true})
});
