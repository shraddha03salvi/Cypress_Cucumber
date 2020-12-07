/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Launch the website', () => {
    cy.log('Launching Website and Select PickUp location')

    cy.visit(Cypress.env('baseUrl'))
    
});

When('User Select <pickUp> location from Search option', () => {
    cy.xpath("//input[@placeholder='Dubai, United Arab Emirates (DXB-Dubai Intl.)']").type(pickUp)
    cy.wait(3000)
});

Then('User click on Find car', () => {
  
});
