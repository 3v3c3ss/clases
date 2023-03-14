export class LoginPage {
    constructor() {
        this.userInput = '#user';
        this.passInput = '#pass';
        this.loginButton = '#submitForm';
    };

    typeUser(user) {
        cy.get(this.userInput).type(user);
    };

    typePassword(password) {
        cy.get(this.passInput).type(password);
    };

    dblclickLogIn() {
        cy.get(this.loginButton).click();
    };

    returnUser(user) {
        return cy.get(`[id^=user_${user}_]`);
    };
};
