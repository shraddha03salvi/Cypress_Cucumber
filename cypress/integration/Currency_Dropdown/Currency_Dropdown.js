/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home page of web site and', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.wait(3000)
});

Given('click on Currency option and Dropdown of currency options is display', () => {
  cy.get('.navbar-toggle').click()
  cy.wait(2000)
  cy.xpath("//div[@class='ui-dropdown-trigger ui-state-default ui-corner-right']").click({force:true})
  cy.wait(2000)
});

When('user entered some data into Search text field', () => {
cy.xpath("//input[@class='ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all']")
.type('EUR')
cy.wait(2000)
  
});

Then('User should get correct result according to search', () => {
  cy.xpath("//a[@class='navbar-toggle active']").click({force:true})
  
});
