/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

var pLoc ="DXB"
const d = new Date();
    var numberOfDaysToAdd = 2;
    d.setDate(d.getDate()+numberOfDaysToAdd);
    const year = d.getFullYear();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let hour = '' + d.getHours();
    let minute = '' + d.getMinutes();
    let seconds = '' + d.getSeconds();

var someDate = new Date();
var numberOfDaysToAdd1 = 3;
someDate.setDate(someDate.getDate() + numberOfDaysToAdd1); 
var dd = '' + someDate.getDate();
var mm = '' + (someDate.getMonth() + 1);
var y = someDate.getFullYear();


    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    if (mm.length < 2) {
         mm = '0' + mm;
     }
    if (dd.length < 2) {
         dd = '0' + dd;
    }
 var pTime = (`${[year, month, day].join('')}T${[10, '00', '00'].join('')}`);
     console.log(pTime)
   var  dTime =(`${[y, mm, dd].join('')}T${[10, '00', '00'].join('')}`);
     console.log(dTime)
     //---------------------------------*********______________________-
//var pLoc ="DXB"
// var pTime ="20200930T100000"
// var dTime ="20201001T100000"

Given('User select car Deal And user click on Book Without protection Button', () => {
    cy.log('Launching Website and Select PickUp location')

    cy.visit(Cypress.env('baseUrl'))
    cy.xpath("//input[@placeholder='Dubai, United Arab Emirates (DXB-Dubai Intl.)']").type('Dubai')
    cy.wait(2000)
    cy.xpath("//ul[@role='listbox']//li/descendant::div[@class='ui-helper-clearfix ng-star-inserted']").
        contains('Dubai International Airport').click({ force: true })
    cy.wait(3000)

    cy.log('Click on Find Car Button')

    cy.xpath("//span[contains(text(),'FIND CAR')]").click({ force: true })
    cy.wait(50000)

    //cy.url().should('eq','baseUrl'+'/search?'+pLoc+'&'+pTime+'&'+dTime)
    cy.wait(4000)
  
    //https://stg.beno.com/search?pLoc=DXB&pTime=20200924T100000&dTime=20200925T100000
    cy.visit((Cypress.env('baseUrl'))+'/search?'+'pLoc'+'='+pLoc+'&'+'pTime'+'='+pTime+'&'+'dTime'+'='+dTime)
    cy.wait(55000)
    cy.log('Click on View Deal ')
  
    cy.xpath("//div[2]/div[1]/app-product-list-item//div/div[2]/div/button/span").click()
    cy.wait(3000)


   it('Check click function on next tab', () => {
cy.url().then(($dealID) => {
   var name = $dealID.text()
    cy.url().should('eq','https://stg.beno.com/detail?dealID=${name}')
             })


             cy.visit('https://stg.beno.com/detail?dealID=${name}',
             { onBeforeLoad(win){ cy.stub(win, 'open')}})
             cy.window().its('open').should('be.called')
       cy.wait(4000)

    
     cy.xpath("//main[1]/div[1]/div[1]/button[2]").click()
     cy.wait(2000)
    cy.xpath("//main[1]/div[1]/div[1]/button[1]").click()
     cy.wait(3000)
    // cy.xpath("//main[1]/div[1]/div[6]/div[1]/textarea[1]").type('Information related to Helpful advice on renting a car.')
    // cy.wait(3000)
    cy.xpath("//main[1]/div[1]/div[7]/button[1]").click()
    cy.wait(3000)
            })
});

When('User fill all the details about driver and clikc on submit', () => {
    cy.xpath("//main[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/select[1]")
    .click({force:true})
    cy.wait(3000)
    cy.xpath("//main[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/select[1]/option[3]")
    .click({ force: true })
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
