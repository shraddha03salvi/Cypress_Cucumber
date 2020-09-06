/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('User Select pickUp location from Search option', () => {

  cy.visit('https://stg.beno.com')
  cy.xpath("//input[@placeholder='Dubai, United Arab Emirates (DXB-Dubai Intl.)']").type('Dubai')
  cy.wait(2000)
  cy.xpath("//ul[@role='listbox']//li/descendant::span[@class='ng-tns-c9-2 ng-star-inserted']").contains('Dubai Mall').click()
  cy.wait(3000)
});

Given('User Select DropOff Location from Search option', () => {
  cy.xpath("//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").click()
  cy.wait(2000)
  cy.xpath("/html[1]/body[1]/app-root[1]/app-homepage[1]/main[1]/section[1]/div[1]/div[1]/div[1]/div[1]/app-advanced-search[1]/div[1]/div[1]/div[1]/div[3]/app-locations[1]/p-autocomplete[1]/span[1]/input[1]").
    type('Dubai')
  cy.wait(2000)
  cy.xpath("//ul[@role='listbox']//li/descendant::span[@class='ng-tns-c9-6 ng-star-inserted']").
    contains('Dubai Internet City').click()
});

When('User select PickUp Date and Time', () => {
  //var Month = "August2020";

  var day = "10";
  cy.wait(2000)
  cy.xpath("//button[@class='ui-datepicker-trigger ui-calendar-button ng-tns-c7-1 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted']//span[@class='ui-button-icon-left ui-clickable pi pi-calendar']").
    click()
  cy.wait(1000)
  while (true) {
    const text = cy.get('.ui-datepicker-title').text()

    // var Month = "August2020";
    cy.wait(4000)
    if (text) {

      break;
    } else {
      cy.wait(1000)
      cy.xpath("//span[@class='ui-datepicker-next-icon pi pi-chevron-right']").click();
    }


  }
  cy.xpath("//div[1]//div[2]//table[1]//tbody[1]//tr//td/a[contains(text()," + day + ")]").click()
  cy.wait(3000)
  cy.xpath("//input[@class='ng-tns-c7-2 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']").
    clear().type('15:30')
  cy.wait(3000)
});
When('User Select DropOff Date and Time', () => {
  //var Month1 ="September2020";
  var day1 = "11";
  cy.xpath("//button[@class='ui-datepicker-trigger ui-calendar-button ng-tns-c7-3 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted']//span[@class='ui-button-icon-left ui-clickable pi pi-calendar']").
    click()
  cy.wait(3000)
  while (true) {
    var text1 = cy.get('.ui-datepicker-title').text()
    cy.wait(3000)
    if (text1)
    //expect(42).to.equal(42)
    {
      break;
    } else {
      cy.xpath("//span[@class='ui-datepicker-next-icon pi pi-chevron-right']").click();
    }
  }
  cy.xpath("//div[1]//div[2]//table[1]//tbody[1]//tr//td/a[contains(text()," + day1 + ")]").click()
  cy.wait(2000)
  cy.xpath("//input[@class='ng-tns-c7-4 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']").
    clear().type('16:30')
});


Then('User click on Find Car Button and Navigate to Listing page', () => {
  cy.wait(3000)
  cy.xpath("//span[contains(text(),'FIND CAR')]").click()

});

