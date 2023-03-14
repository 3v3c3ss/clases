/// <reference types="cypress" /> 

describe("Acividad complementaria 5", () => {
    const timeout = 10000;

    beforeEach("Precondiciones", () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type('pushingit');
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click();
        cy.get('[id*="user_pushingit"]').should('exist');
        cy.get('#waitslink').click();
        cy.get('button#wait').dblclick();

    })

    it("Deberia validar la primera espera", () => {
         //verificar que el boton 'cargando' su texto vuelva a ser 'button'. ('have.text')
         cy.get('#wait', {timeout}).should('have.text', 'Button');
    });

    it("Deberia validar la segunda espera", () => {
        //verificar que exista un elemento cuyo texto sea 'wait 5 more seconds' ('have.text')
        cy.get('#colorChangeMessage', {timeout}).should('have.text', 'Wait 5 more seconds');
    });

    it.only("Deberia validar la tercera esepra", () => {
      //verificar que el primer mensaje que aparece a los 10 luego de 5 segundos mas sea diferente. (que cambie el mensaje) ('have.text') 2 lineas de codigo
      cy.get('#message', {timeout}).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS');
      cy.get('#message', {timeout}).should('have.text', 'You are a man of patience and have waited fifteen seconds');
    });


})