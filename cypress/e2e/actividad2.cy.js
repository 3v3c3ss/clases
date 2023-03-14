//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        
     // cy.get('#user').type(`pushingit${numero}`); 
        cy.get('[id="user"]').type(`pushingit${numero}`);
        
     // cy.get('[name="user"]').clear()
        cy.get('[id="user"]').clear()
        
     // cy.get('input#user').type(`pushingit${numero}`);
        cy.get('input[id="user"]').type(`pushingit${numero}`);
        
     // cy.get('input.password').type('123456!');
     // cy.get('.password').type('123456!'); 
        cy.get('[name="pass"]').type('123456!');

     // cy.get("input[class = 'chakra-radio__input']").check({force:true})
     // cy.get('[value="Male"]').check({force:true});
        cy.get('fieldset').find('input[value="Male"]').check({force:true});

     // cy.get('select#day').select('20');
     // cy.get('#day').select('15');
        cy.contains('Day of birth').siblings('div').children('#day').select('16');   
        
     // cy.get('select#month').select('September');
     // cy.get('#month').select('September');   
        cy.contains('Month').siblings('div').children('#month').select('April');

     // cy.get('select#year').select(10);
        cy.contains('Year').siblings('div').children('#year').select('1994');
        
     // cy.get('button#submitForm').click()
        cy.contains('Register').click();
        
        cy.wait(5000)
    });
});