/// <reference types="Cypress" />

describe('accesing the conduit koneksa', ()=> {
    it('visit and access the conduit koneksa', ()=>{
        cy.visit('http://ec2-54-160-150-114.compute-1.amazonaws.com:5000/')
    })

    it('sign in', ()=>{
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').type('mie@yahoo.com')
        cy.get(':nth-child(2) > .form-control').type('hireme')
        cy.get('.btn ').click()
    })

   it('create a new posts', ()=>{
       cy.contains('New Post').click()
       cy.get(':nth-child(1) > .form-control').type('Health care')
       cy.get(':nth-child(2) > .form-control').type('test')
       cy.get(':nth-child(3) > .form-control').type('by drinking 2L of water in a day will make you healthier')
       cy.get(':nth-child(4) > .form-control').type('#test, #health')
       cy.get('.btn').click()
   })
   it('create a new comment', ()=> {
       cy.get('.form-control').type('great to know :)')
       cy.get('.card-footer > .btn').click()
   })
})