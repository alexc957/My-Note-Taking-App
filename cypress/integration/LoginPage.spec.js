/// <reference types="cypress" />


context('login page',()=> {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/#/login')
    })

    it('should log in a user',()=>{

        cy.get('[data-testid=input-mail]').type('testing@mail.com')
        cy.get('[data-testid=input-password]').type("Alex1995")
        cy.get('[data-testid=submit]').click()

        cy.url().should('eq','http://localhost:3000/#/notes')



    })

    it("should not authenticate a non-existing user", ()=> {
        // There is no user record corresponding to this identifier. The user may have been deleted.
        cy.get('[data-testid=input-mail]').type('tesstsssing@mail.com')
        cy.get('[data-testid=input-password]').type("Alesx1995")
        cy.get('[data-testid=submit]').click()
        cy.wait(2000)

        cy.get('[data-testid=error-message]').should('have.text','There is no user record corresponding to this identifier. The user may have been deleted.')
    })
})