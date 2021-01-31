/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User selecting PickUp location', () => {
  
  cy.visit(Cypress.env('baseUrl'))
  cy.xpath("//input[@placeholder='Dubai, United Arab Emirates (DXB-Dubai Intl.)']").type('Dubai')
  cy.wait(2000)
  cy.xpath("//ul[@role='listbox']//li/descendant::div[@class='ui-helper-clearfix ng-star-inserted']").
  contains('Dubai International Airport').click({force:true})
  cy.wait(3000)


});

Given('User click on FindCar button', () => {
  cy.wait(2000)
  cy.get('#btn-findCar').click({ force: true })
  cy.wait(50000)
});

Given('User click on SortBy Feature', () => {
  cy.wait(1000)
  cy.xpath("//span[contains(text(),'High - Low')]").click({ force: true })
  cy.wait(2000)
});

When('User click on Filter feature', () => {
  
  cy.xpath("//span[contains(text(),'Filter Results')]").click({force: true})
  cy.wait(3000)
  cy.xpath("//body/p-dynamicdialog[1]//div[1]/div[2]/app-search-filters[1]/section[1]/p-accordion[1]/div[1]/p-accordiontab[1]/div[2]/div[1]/p[2]/p-checkbox[1]/div[1]/div[2]")
  .click({force:true})
  cy.wait(3000)
  cy.xpath("//body/p-dynamicdialog[1]/div[1]/div[1]/div[1]/div[1]/a[1]/span[1]").click({force:true})
  cy.wait(3000)
});

When('click on View deal option', () => {
  cy.xpath("//body/app-root[1]/app-searchpage[1]/main[1]//div[1]/section[1]/div[3]/div[2]/div[1]/app-vehicle-display[1]/div[1]/div[2]/button[1]/span[1]")
  .click()
  cy.wait(3000)
});

Then('User navigate to options Tab', () => {
  
  cy.log('User navigate to next tab')
  cy.url()
  cy.wait(2000)
  cy.xpath("//*[text()='Important information about your rental']").click({force:true})
  cy.wait(3000)
  cy.xpath("//*[text()='Car Details']").click({force:true})
  cy.wait(3000)
  cy.xpath("//button[@class='btn d-flex text-left btn-lg btn-success mr-2']").click({force:true})
  cy.wait(3000)
});
///p-accordiontab[@class='ng-tns-c15-9 ng-star-inserted']//p-checkbox[2]//div[1]//div[2]
////p-accordiontab[@class='ng-tns-c15-9 ng-star-inserted']//p-checkbox[2]//div[1]//div[2]