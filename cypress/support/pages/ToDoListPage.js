export class ToDoListPage {
    constructor() {
        this.allButton = '#all';
        this.completedButton = '#completed';
        this.activeButton = '#active';
        this.removeAllButton = '#removeAll'
    };

    returnallButton() {
        return cy.get(this.allButton);
    };

    returncompletedButton() {
        return cy.get(this.completedButton);
    };

    returnactiveButton() {
        return cy.get(this.activeButton);
    };

    returnremoveAllButton() {
        return cy.get(this.removeAllButton);
    };
 
};
