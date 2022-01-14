
it ('TestProject',function(){

    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('.home').click()
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type('John')
    cy.get(':nth-child(2) > .form-control').type('Wich')
    cy.get(':nth-child(3) > .form-control').type('0000')
    cy.get('form.ng-dirty').click()
  
    cy.get
    cy.get('.home')
        .should('be.visible')
        .should('be.enabled')
        expect(true).to.be.true


        let name='saeed'
        expect (name).to.be.equal('saeed')

       assert.equal(4, 4, 'Not Equal') 


})