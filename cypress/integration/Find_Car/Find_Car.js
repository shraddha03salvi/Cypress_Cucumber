/// <reference types ="Cypress"/>



import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('User Select pickUp location from Search option', () => {
  cy.visit('http://stg.beno.com')
  cy.xpath("//input[@placeholder='Dubai, United Arab Emirates (DXB-Dubai Intl.)']").type('Dubai')

  cy.xpath("//ul[@role='listbox']//li/descendant::div[@class='ui-helper-clearfix ng-star-inserted']")
  .contains('Dubai Marina').click()
  //ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset
});

Given('User Select DropOff Location from Search option', () => {
  cy.xpath("//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").click()
  cy.xpath("//span[@class='ng-tns-c9-3 ui-autocomplete ui-widget']//input[@placeholder='Dubai, United Arab Emirates (DXB-Dubai Intl.)']")
  .type('Dubai')
  cy.xpath("//ul[@role='listbox']//li/descendant::div[@class='ui-helper-clearfix ng-star-inserted']")
  .contains('Dubai Media City').click()
});

When('User select PickUp Date and DropOff Date', () => {
  
  // cy.xpath("//input[@class='ng-tns-c8-1 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']",{ timeout: 20000 })
  // .find('input').click()
//   const day = "30";
//   const day1 ="31";
//   const re = new RegExp('/(\d{1,2})\/(\d{1,2})\/(\d{4})/')

//   cy.xpath("//div[@class='ng-trigger ng-trigger-overlayAnimation ng-tns-c8-1 ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-shadow ui-datepicker-multiple-month ng-star-inserted']")
//   .should('be.visible')
// .contains('//div[1]//div[2]//table[1]//tbody[1]//tr//td/a', dayRegex)
// .click()
//   // const todaysDate = Cypress.moment().format('MM/DD/YYYY')
  // cy.get('.ui-datepicker-title').should( +todaysDate)
  //  const text= cy.get('.ui-datepicker-title').text().then((Month = "July2020") => {
  //  expect(text).equals(Month = "July2020");
  //cy.xpath("//div[1]//div[2]//table[1]//tbody[1]//tr//td/a[contains(text()," + day + ")]").click()
  //  });
  // cy.get('.ui-datepicker-title').then((text1) => {
  //   expect('August2020').to.equal(text1);
  // cy.wait(5000)
  //   var day1 = "3";
  //   cy.xpath("//div[1]//div[2]//table[1]//tbody[1]//tr//td/a[contains(text()," + day1 + ")]").click()

  //});

  

});

When('User Select PickUp Time and  Drop-off Time', () => {

 
//  cy.xpath("//div//div[1]//app-advanced-search//div//div[4]/div/select[1]").select('14',{force:true})
//  .should('have.value','14')
//  cy.wait(3000)
// cy.xpath("//div//div[1]//app-advanced-search//div//div[4]/div/select[2]").select('30',{force:true})
// .should('have.value','30')
//  cy.wait(3000)
cy.xpath("//div//div[1]//app-advanced-search//div//div[5]/div/select[1]").select('16',{force: true})
.should('have.value','16')
cy.wait(3000)
cy.xpath("//div//div[1]//app-advanced-search//div//div[5]/div/select[2]").select('30',{force:true})
.should('have.value','30')


});

Then('User click on Find Car Button and Navigate to Listing page', () => {
cy.xpath("//span[contains(text(),'FIND CAR')]").click({ force: true })
cy.wait(3000)
});
