/// <reference types="cypress" />



context('Landing page', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })

    it('it should be a title', ()=>{
        cy.get("[data-testid=header]").should('have.text',"A Simple Way to take care of your notes")
    })

    it('features section should exist', ()=>{
        cy.get("[data-testid=features]").should('have.text',"Features")
    })

    it('feature 1 should exists',()=>{
        cy.get("[data-testid=feature1]").should("have.text","Create notebooks")
        
    })

    it('feature 3 should exists',()=>{
        cy.get("[data-testid=feature3]").should("have.text","Create and edit notes by using markdown")

        
    })

    it('feature 2 should exists',()=>{
        cy.get("[data-testid=feature2]").should("have.text","Delete your notes on demand")

        
    })    

    it('feature 4 should exists',()=>{
        cy.get("[data-testid=feature4]").should("have.text","Share your notes by using twitter")

        
    })    

    it("has plans text", ()=> {
        cy.get("[data-testid=plans]").contains("Plans")

    })

    it("should exits a Free section",()=>{
        const plans = [
            '15 notebooks per user',
            '30 notes per notebook',
            '0$/Month'
        ]
        const freeEl = cy.get("[data-testid=FreeFeature]")
        freeEl.then(($els)=>{
            return (
                Cypress.$.makeArray($els)
                .map((el)=>el.innerText)
            )
        }).should('deep.equal',plans)

    })


    it("should exits a Free section",()=>{
        const plans = [
            '15 notebooks per user',
            '30 notes per notebook',
            '0$/Month'
        ]
        const freeEl = cy.get("[data-testid=FreeFeature]")
        freeEl.then(($els)=>{
            return (
                Cypress.$.makeArray($els)
                .map((el)=>el.innerText)
            )
        }).should('deep.equal',plans)

    })

    it("should exits a Premium section",()=>{
        const plans = [
            'unlimited notebooks per user',
            'unlimited notes per notebook',
            '5$/Month'
        ]
        const freeEl = cy.get("[data-testid=PremiumFeature]")
        freeEl.then(($els)=>{
            return (
                Cypress.$.makeArray($els)
                .map((el)=>el.innerText)
            )
        }).should('deep.equal',plans)

    })

    it('should navigate to SignUp page',()=>{
        const buttonEl = cy.get('[data-testid=button-Free]')
        buttonEl.click()

        cy.get('[data-testid=title]').should("have.text","Create an Account")
    })




})

