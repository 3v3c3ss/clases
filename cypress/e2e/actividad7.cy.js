/// <reference types="cypress" /> 

import { LoginPage } from '../support/pages/LoginPages'

describe("Acividad complementaria 6", () => {
    let loginData
    const loginPage = new LoginPage();
    
    before('Before', () => {
        cy.fixture('fixture1').then(data => {
            loginData = data
        });
    });

    beforeEach("actividad 6", () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    });

    it('Screenshots 1', () => {
        cy.screenshot({capture: 'fullPage'});
    });

    it('Screenshots', () => {
        loginPage.typeUser(loginData.test1.user);
        loginPage.typePassword(loginData.test1.pass);
        loginPage.dblclickLogIn();
        cy.get('#todolistlink').screenshot('todolist');
    });
});