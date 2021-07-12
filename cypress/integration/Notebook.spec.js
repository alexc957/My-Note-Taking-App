/// <reference types="cypress" />


context('Creating notebooks',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/#/login')
        
        cy.get('[data-testid=input-mail]').type('testing@mail.com')
        cy.get('[data-testid=input-password]').type("Alex1995")
        cy.get('[data-testid=submit]').click()
        cy.wait(1000)
    })

    it('should create a new notebook',()=> {
        cy.wait(1500)

        cy.get('[data-testid=new-notebook]').click()
        const title = 'A new notebook'+Math.floor(Math.random()*100);
        cy.get('[data-testid=input-notebook]').type(`${title}{enter}`)
        cy.get(`[data-testid=nb-${title.replace(/ /g,'-')}]`).should('have.text',title);

        

    })


    it("should create and edit a new notebook",()=>{

        cy.wait(2500)

        cy.get('[data-testid=new-notebook]').click()
        const title = 'A new notebook5'+Math.floor(Math.random()*100);
        cy.get('[data-testid=input-notebook]').type(`${title}{enter}`)
        cy.get(`[data-testid=nb-${title.replace(/ /g,'-')}]`).dblclick()
        const newTitle = 'A edited notebook'+Math.floor(Math.random()*100);
        cy.get('[data-testid=input-edit]').clear().type(newTitle).should('have.value',newTitle);

       



    })


    it('should delete a notebok',()=> {
        cy.wait(100)
        cy.get('[data-cy=notebook]').last().click()
        cy.get('[data-testid=delete-notebook]').click()
        cy.get('[data-cy=notes]').should('not.exist')
        

    })

    

    
})