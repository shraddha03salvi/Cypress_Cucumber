/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User select PicKup-Location', () => {
  
  cy.visit(Cypress.env('baseUrl'))
  cy.xpath("//input[@placeholder='Dubai, United Arab Emirates (DXB-Dubai Intl.)']").type('Dubai')
  cy.wait(2000)
  cy.xpath("//ul[@role='listbox']//li/descendant::div[@class='ui-helper-clearfix ng-star-inserted']").
  contains('Dubai International Airport').click({force:true})
  cy.wait(3000)

});

Given('Click on Find car Button', () => {
  cy.wait(2000)
  cy.xpath("//span[contains(text(),'FIND CAR')]").click({ force: true })
  cy.wait(2000)
});

When('User checked(select) checkbox of Car Types', () => {
  cy.wait(4000)
cy.xpath("//div//p//p-checkbox").click({force:true})
//cy.get('[type="checkbox"]').check()
cy.wait(4000)

  
});

Then('User click on clear option', () => {
  cy.wait(2000)
 cy.xpath("//p//a[contains(text(),'Clear')]").click({force:true})
  cy.wait(3000)
});
