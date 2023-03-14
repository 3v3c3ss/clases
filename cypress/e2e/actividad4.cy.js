/// <reference types="cypress" />

describe("Actividad complementaria 4", () =>{
    let loginData;
    

    before('before', () => {
        cy.fixture('fixture1').then(data => {
            loginData = data;
        });
    }); 

    beforeEach('Hacer log in', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    }); 
    
    it('Validar mensaje de error password incorrecta', () => {
        cy.get('#user').type(loginData.test1.user);
        cy.get('#pass').type(loginData.test1.pass);
        cy.get('#submitForm').click();
        cy.get('#errorMessage').should('have.text', loginData.test1.errorMessage);

    })

});