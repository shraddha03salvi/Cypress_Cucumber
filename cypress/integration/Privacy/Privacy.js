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
  // cy.xpath("//a[@class='navbar-toggle active']").click({force:true})
  // cy.wait(2000)
  // cy.xpath("//div[@class='navbar-wrapper open']/nav[@class='navbar container-fluid pl-xs-2 pr-xs-2 pl-5 pr-5 sticky-top navbar-fixed-top navbar-top']/div[@class='collapse navbar-collapse active']/ul[@class='navbar-nav']/li[@class='nav-item nav-item-help']/a/*[@class='icon icon-md']/*[1]")
  // .click({force:true})
  // cy.wait(1000)
  // cy.xpath("//a[@class='navbar-toggle active']").click({force:true})
  // cy.wait(2000)
});

When('User click on privacy Option', () => {
  cy.xpath("//a[contains(text(),'Privacy')]").click();
  cy.wait(2000)

});

Then('User should able to navigate to privacy page', () => {

});



