/// <reference types="cypress" /> 

import { LoginPage } from '../support/pages/LoginPages'
import { ToDoListPage } from'../support/pages/ToDoListPage';

describe("Acividad complementaria 6", () => {
    let loginData
    const loginPage = new LoginPage();
    const toDoListPage = new ToDoListPage();
    
    before('Before', () => {
        cy.fixture('fixture1').then(data => {
            loginData = data
        });
    });

    beforeEach("actividad 6", () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        loginPage.typeUser(loginData.test1.user);
        loginPage.typePassword(loginData.test1.pass);
        loginPage.dblclickLogIn();
        loginPage.returnUser(loginData.test1.user).should('include.text', loginData.test1.user);
        cy.get('#todolistlink').click();
    });

    it('Validar botones', () => {
        toDoListPage.returnallButton().should('exist');
        toDoListPage.returncompletedButton().should('exist');
        toDoListPage.returnactiveButton().should('exist');
        toDoListPage.returnremoveAllButton().should('exist');
    });
});
