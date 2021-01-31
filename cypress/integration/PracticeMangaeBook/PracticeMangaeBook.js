/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('User must be on Home page of WebSite', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.wait(2000)
  
});

When('User click on Manage Booking option', () => {
    cy.get('.navbar-toggle').click()
    cy.wait(2000)
    cy.xpath("//app-header/main[1]/nav[1]/div[2]/ul[1]/li[3]/a[1]").click()
    cy.wait(2000)
});

When('Enter',(datatable) => {
    datatable.hashes().forEach(element=>{
   cy.get('#email').type(element.email)
   cy.wait(2000)
   cy.get('#bookingID').type(element.Booking_ID)
   cy.wait(2000)
    })  
    
});

Then('User click on submit and User should navigate to Booking ID page', () => {
    cy.get('#btnFindBooking').click({force:true})
    cy.wait(3000)
});
