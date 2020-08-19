/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home page', () => {
  cy.visit('http://stg.beno.com')
  cy.wait(3000)
});
When('User click on Help Icon and user should navigate to Help page', () => {
  cy.get('.navbar-toggle').click()
  cy.wait(2000)
  cy.xpath("//div[@class='navbar-wrapper open']/nav[@class='navbar container-fluid pl-xs-2 pr-xs-2 pl-5 pr-5 sticky-top navbar-fixed-top navbar-top']/div[@class='collapse navbar-collapse active']/ul[@class='navbar-nav']/li[@class='nav-item nav-item-help']/a/*[@class='icon icon-md']/*[1]")
  .click({force:true})
  cy.wait(1000)
  cy.xpath("//a[@class='navbar-toggle active']").click({force:true})
  cy.wait(2000)
});
When('User click on specific Question arrow', () => {
cy.xpath("//a[@class='ng-tns-c12-4']//span[@class='ui-accordion-toggle-icon pi pi-fw pi-chevron-right']").click({force:true})
cy.xpath(2000)
cy.xpath("//a[@class='ng-tns-c12-5']//span[@class='ui-accordion-toggle-icon pi pi-fw pi-chevron-right']").click({force:true})
cy.wait(4000)
});

Then('User should able to see complete content of Answer', () => {
  cy.xpath("//span[@class='ui-accordion-toggle-icon pi pi-fw pi-chevron-down']").click({force:true})
  cy.xpath(2000)
});
