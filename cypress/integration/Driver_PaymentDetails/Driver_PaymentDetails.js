/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User select car Deal And user click on Book Without protection Button', () => {
    cy.log('Launching Website and Select PickUp location')

    cy.visit('http://stg.beno.com')
    cy.xpath("//input[@placeholder='Dubai, United Arab Emirates (DXB-Dubai Intl.)']").type('Dubai')
    cy.wait(2000)
    cy.xpath("//ul[@role='listbox']//li/descendant::div[@class='ui-helper-clearfix ng-star-inserted']").
        contains('Dubai Mall').click({ force: true })
    cy.wait(3000)

    cy.log('Click on Find Car Button')

    cy.xpath("//span[contains(text(),'FIND CAR')]").click({ force: true })
    cy.wait(100000)

    
    cy.log('Click on View Deal and Book Now Option')

    cy.xpath("//div[2]/div[1]/app-product-list-item//div/div[2]/div/button/span").click({ force: true })
    cy.wait(3000)
    cy.xpath("//button[@class='btn d-flex text-left btn-lg btn-success mr-2']").click({ force: true })
    cy.wait(3000)

});

When('User fill all the details about driver and clikc on submit', () => {
    cy.xpath("//div//div[2]//form//div[1]/p-dropdown/div/div[3]/label")
    .click({force:true})
    cy.wait(3000)
    cy.xpath("//p-dropdown//div//p-dropdownitem[3]//li[1]")
    .contains('Mrs.').click({ force: true })
    cy.wait(2000)
    cy.get('#firstName').type('Shraddha')
    cy.wait(2000)
    cy.xpath("//div[3]//input[1]").type('Dhatavkar')
    cy.wait(2000)
    cy.xpath("//div[4]//input[1]").type('shraddha.dhatavkar@beno.com')
    cy.wait(2000)
    cy.xpath("//div[@class='mb-3 form-item']//input[@class='ng-untouched ng-pristine ng-invalid ui-inputtext ui-corner-all ui-state-default ui-widget']")
        .type('0509034567')
    cy.wait(2000)
    cy.get('#consentCheckBox').check()
    cy.wait(2000)
    cy.xpath("//button[@class='btn btn-lg btn-success']").click({ force: true })
    cy.wait(2000)

});

When('User navigate to Payment Details page', () => {
    cy.get('#name').type('Shraddha Dhatavkar')
    cy.wait(2000)
    cy.get('#cardNumber').type('5555555555554444')
    cy.wait(2000)
    cy.xpath("//input[@class='ng-tns-c8-13 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']")
        .type('09/2022')
    cy.wait(2000)
    cy.get('#cvv').type('987')
    cy.wait(2000)

});

Then('User Fill all the Payment Details and Click on Submit', () => {
    cy.xpath("//*[text()='Book Now']").click({ force: true })
    cy.wait(2000)

});
