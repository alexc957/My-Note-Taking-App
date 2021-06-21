/// <reference types="cypress" />


context('create notes',()=> {
    before(()=>{
        cy.visit('http://localhost:3000/#/login')
        cy.get('[data-testid=input-mail]').type('testing@mail.com')
        cy.get('[data-testid=input-password]').type("Alex1995")
        cy.get('[data-testid=submit]').click()

        
       

    })

    it('should create a note',()=>{
        cy.wait(2000)

        cy.get('[data-cy=notebook]').first().click()
        cy.wait(1000)
        cy.get('[data-testid=new-note]').click()
        const title = 'a new note'+Math.floor(Math.random()*1000)
        cy.get('[data-testid=input-note]').type(`${title}{enter}`)
        cy.get(`[data-testid=note-${title.replace(/ /g,'-')}]`).should('have.text', title)
    })


    it("it should input a markdown text",()=>{
        cy.get('[data-cy=notes]').first().click()
        const markdown = "# Hello{enter}## This is a mardown{enter}1. sdfsd{enter}2. dfsdf"
        cy.get('[data-testid=input-markdown]').type(markdown)
        cy.get('[data-testid=preview]').children().should('have.length',4);
        const today = new Date() 
        cy.get('[data-testid=save-note]').click()
        cy.get('[data-testid=saved-at]').should('have.text', today.toDateString())


    })
})
