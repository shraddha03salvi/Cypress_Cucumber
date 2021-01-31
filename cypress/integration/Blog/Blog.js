/// <reference types ="Cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User must be on Home page', () => {
  cy.log('Launching Website ')

  cy.visit(Cypress.env('baseUrl'))
  cy.wait(3000)
});

When('User Click on Blog Link Link', () => {
  cy.contains('QUICK LINKS').scrollIntoView()
  cy.wait(4000)
  cy.xpath("//a[contains(text(),'Blog')]").click()
  cy.wait(3000)
});

Then('User Navigate to Blog page', () => {
   cy.visit('https://stg.beno.com/en/blog')
 cy.wait(3000)
 cy.xpath("//body/app-root[1]/div[1]/app-blog[1]/main[1]/section[2]/div[1]//div[1]/a[1]/u[1]/p[1]").
 click()
 cy.wait(3000)
 
});
