const data = require("../fixtures/data.json");
import { loginPage } from '../page_objects/loginPage.js';
import { professor } from '../page_objects/professor.js'

describe('create gallery', () => {
    before(() => {
        cy.visit('/');
        loginPage.login(data.login.email, data.login.password);
        professor.clickProfBtn();
        professor.clickCreateProf();
        cy.url().should('eq', 'https://gradebook.vivifyideas.com/create-professor');
    });
    it('', () => {
        professor.fillFirstName(data.professor.fName);
        professor.fillLastName(data.professor.lName);
        professor.clickAddImg();
        professor.fillImgUrl(data.professor.image);
        professor.clickSubmit();

        cy.url().should('eq', 'https://gradebook.vivifyideas.com/all-professors')
    });

});