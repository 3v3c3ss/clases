/// <reference types="cypress" />
describe("Actividad complementaria 3", () =>{

    it('Actividad complementaria 3', () =>{
        cy.visit('');
        
     /*   cy.contains('Iniciá sesión').dblclick();
        cy.get('#user').type('pushingit');
        cy.xpath("//input[@id='pass']").type('123456!');
        cy.get('#submitForm').click();
        cy.get('#todolistlink').click();
        cy.get("[id^='sen']").type('tarea 1');
        cy.get('#sendTask').click();
        cy.contains('tarea 1').click(); */

        cy.xpath("//span[@id='registertoggle']").dblclick();
        cy.xpath("//input[@id='user']").type('pushingit');
        cy.xpath("//input[@id='pass']").type('123456!');
        cy.xpath("//button[text()='Log in']").click();
        cy.xpath("//a[contains(@id,'todolist')]").click();
        cy.xpath("//div//descendant::input[@id='task']").type('tarea 1');
        cy.xpath("//button[text()='Send']").click();
        cy.xpath("//p[text()='tarea 1']").click();

         });
     });