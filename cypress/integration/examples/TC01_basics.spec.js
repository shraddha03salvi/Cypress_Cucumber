/// <reference types ="Cypress" />
describe('Create and mark-unmark as favorite', function() {
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('shraddha12salvi@gmail.com')
        cy.get('input[type="password"]').type('swapnil03')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
       
    })
    it('Create Post',function(){
      cy.contains('New Post').click()
      cy.hash().should('include','#/editor')
      cy.get('input[placeholder="Article Title"]').type('shraddha12salvi')
      cy.get('input[placeholder="What\'s this article about?"]').type('Cypress Test')
      cy.get('textarea[placeholder="Write your article (in markdown)"]').type('End To End Testing Using Cypress')
      cy.contains('Publish Article').click()
      cy.url().should('include','artilce')


     })
    it('Mark_Unmark as favorite',function(){
      cy.get('.nav-link').contains('shraddhasalvi').click()
      cy.contains('My Articles').should('be.visible')
      cy.get('.ion-heart').click()
      cy.contains('Favorited Articles').click()
      cy.url().should('include','favorite')
      cy.get('.ion-heart').click()
      cy.reload()
      cy.contains('No articles are here... yet.').should('be.visible')
      
      cy.go('back')
      //cy.go(-1)
    
 })



})