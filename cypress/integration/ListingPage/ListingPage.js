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
  cy.xpath("//span[contains(text(),'FIND CAR')]").click({ force: true })
  cy.wait(10000)
});

Given('User click on SortBy Feature', () => {
  cy.wait(5000)
  cy.xpath("//span[contains(text(),'High - Low')]").click({ force: true })
  cy.wait(3000)
});

When('User click on Filter feature', () => {
  
  cy.xpath("//div//p/p-checkbox[3]/div[1]/div[2]").click({force: true})
  cy.wait(4000)
  
});

When('click on View deal option', () => {
  cy.xpath("//div[2]/div[1]/app-product-list-item//div/div[2]/div/button/span").click()
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