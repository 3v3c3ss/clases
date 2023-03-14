/// <reference types="cypress" />
describe("Desafio 1", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('[id="user"]').type(`pushingit${numero}`);
        cy.get('[name="pass"]').type('123456!');
        cy.get('fieldset').find('input[value="Male"]').check({force:true});
        cy.contains('Day of birth').siblings('div').children('#day').select('16');   
        cy.contains('Month').siblings('div').children('#month').select('April');
        cy.contains('Year').siblings('div').children('#year').select('1994');
        cy.contains('Register').click();
        cy.get('#todolistlink').click();
        cy.get('div').find('input').type('tarea 1');
        cy.get('[id="sendTask"]').click();
        cy.contains('tarea 1').click();

        
    });
});