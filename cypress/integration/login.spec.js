const data = require("../fixtures/data.json");
import { loginPage } from '../page_objects/loginPage.js'

describe('login', () => {
    beforeEach(() => {
        cy.visit('/');
        loginPage.clearFields();
    });
    it('login without password', () => {
        loginPage.fillEmailInput(data.login.email);
        loginPage.clickSubmitButton();
        loginPage.emailInput.should('exist');
        loginPage.passwordInput.should('exist');
    });
    it('login incorrect email', () => {
        loginPage.login(data.login.emailIncorrect, data.login.password);
        loginPage.emailInput.should('exist');
        loginPage.passwordInput.should('exist');
    });
    it('login incorrect email type', () => {
        loginPage.login(data.login.emailIncorrectType, data.login.password);
        loginPage.emailInput.should('exist');
        loginPage.passwordInput.should('exist');
        loginPage.submitButton.should('exist');
    });
    it('login password less than 8 characters', () => {
        loginPage.login(data.login.email, data.login.passwordShort);
        loginPage.emailInput.should('exist');
        loginPage.passwordInput.should('exist');
        loginPage.submitButton.should('exist');
    });
    it('login password without number', () => {
        loginPage.login(data.login.email, data.login.passwordWithoutNumber);
        loginPage.emailInput.should('exist');
        loginPage.passwordInput.should('exist');
        loginPage.submitButton.should('exist');
    });
    it('Successful login', () => {
        loginPage.login(data.login.email, data.login.password);
        cy.url().should('eq', 'https://gradebook.vivifyideas.com/gradebooks');
        cy.wait(1500);
        loginPage.emailInput.should('not.exist');
        loginPage.passwordInput.should('not.exist');
    });
});