/// <reference types ="Cypress"/>

describe('hub spot page feature',()=>{
it('handle login page test',()=>{
    cy.visit('https://app.hubspot.com/login')
    cy.get('#username').type('naveen@gmail.com')
    cy.get('#password').type('naveen@g123')
    cy.get('#loginBtn').click()



})
})