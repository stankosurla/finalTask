const data = require("../fixtures/data.json");
import { loginPage } from '../page_objects/loginPage.js';
import { gradebook } from '../page_objects/gradebook.js';

describe('gradebook', () => {
    before(() => {
        cy.visit('/');
        loginPage.login(data.login.email, data.login.password);
        cy.url().should('eq', 'https://gradebook.vivifyideas.com/gradebooks');
    });
    it('create gradebook', () => {
        gradebook.clickCreateGrade();
        gradebook.fillGradeTitle(data.gradebook.title);
        gradebook.selectSelectProf("Stanko Jovic3");
        gradebook.clickSubmit();
        cy.url().should('eq', 'https://gradebook.vivifyideas.com/gradebooks');
        cy.get('h3').should('contain', 'All Gradebooks Page');
    });
});