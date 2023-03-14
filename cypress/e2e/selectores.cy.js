/// <reference types="cypress" />

describe("Selectores", () =>{
    
    it('Encontrando selectores', () =>{
        cy.visit('');
        cy.get('button').should('exist');
        cy.get('[id="user"]').should('exist');
        cy.get('input#user').should('exist');
        cy.get('.password').should('exist');
        
    });

    it('Utilizando metodo .find', () => {
        cy.visit('');
        cy.get('fieldset').find('input').should('exist');
    });

    it('Utilizando metodo .children', () => {
        cy.visit('');
        cy.get('label').children('input[value="Male"]').should('exist');
    });

    it('Utilizando metodo .parent', () => {
        cy.visit('');
        cy.get('input[value="Male"]').parent('label').should('exist');
    });

    it('Utilizando metodo .siblings', () => {
        cy.visit('');
        cy.get('input#user').siblings('label').should('exist');
    });

    it('Utilizando metodo .contains', () => {
        cy.visit('');
        cy.contains('Register').should('exist');
    });

    
});
