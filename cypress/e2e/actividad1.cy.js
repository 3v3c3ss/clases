/// <reference types="cypress" />
describe("Actividad complementaria", () =>{
    let numero = Math.floor(Math.random() * 1000);
    it('Actividad complementaria 1', () =>{
        cy.visit('');
        cy.get('#user').type("Evelio");
        cy.get('#user').clear();
        cy.get('#user').type("Evelio" + numero);
        cy.get('#pass').type("evelio1!");
        cy.get('[value= "Male"]').check({force: true});
        cy.get('#day').select("6");
        cy.get('#month').select("April");
        cy.get('#year').select(73);
        cy.get('#submitForm').click();


        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
    });
});
