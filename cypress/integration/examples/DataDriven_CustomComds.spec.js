/// <reference types ="Cypress" />
describe('DataDriven Testing for Picking-Up location', function() {
    it('Selection of Picking-up location', function(){
        cy.Picking-Up('Dubai')
        cy.xpath("//ul[@role='listbox']//li/descendant::div[@class='ui-helper-clearfix ng-star-inserted']")
  .contains('Dubai Marina').click()
  cy.wait(2000)
  cy.Picking-Up('London')
        cy.xpath("//ul[@role='listbox']//li/descendant::div[@class='ui-helper-clearfix ng-star-inserted']")
  .contains('IBM London').click()
        
    });
})