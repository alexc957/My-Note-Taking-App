/// <reference types="cypress" />



context("sign up page",()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/#/signup')
    })

    it('should email label exists',()=> {
        cy.get('[data-testid=email]').should('have.text','Email')
    })

    it('should username label exists',()=> {
        cy.get('[data-testid=username]').should('have.text','username')
    })
    it('should password label exists',()=> {
        cy.get('[data-testid=password]').should('have.text','Password')
    })

    it('should input in the form field', ()=>{
        cy.get("[data-testid=input-username]").type('test').should('have.value','test')
        cy.get("[data-testid=input-mail]").type('test@mail.com').should('have.value','test@mail.com')
        cy.get("[data-testid=input-passwd]").type('test64878').should('have.value','test64878')
    })

    it('should not create a new user with the same mail', ()=>{
        const username = `testalex${Math.random()*100}`
        cy.get("[data-testid=input-username]").type(username)
        cy.get("[data-testid=input-mail]").type('testing@mail.com')
        cy.get("[data-testid=input-passwd]").type('test64878'+username)

        cy.get('[data-testid=submit-btn]').click()
        cy.wait(2000)

        cy.get("[data-testid=error-message]").should('have.text','The email address is already in use by another account.')

    })

    it('should create a newuser l', ()=>{
        const username = `testalex${Math.random()*100}`
        cy.get("[data-testid=input-username]").type(username)
        cy.get("[data-testid=input-mail]").type(username+'@mail.com')
        cy.get("[data-testid=input-passwd]").type('test64878'+username)

        cy.get('[data-testid=submit-btn]').click()
        cy.wait(2000)
        cy.intercept('https://www.googleapis.com/*')
       // cy.get("[data-testid=error-message]").should('have.text','The email address is already in use by another account.')

    })


    






})