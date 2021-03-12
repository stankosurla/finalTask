class LoginPage {
    get emailInput() {
        return cy.get('input[name="email"]');
    }
    get passwordInput() {
        return cy.get('input[name="password"]')
    }
    get submitButton() {
        return cy.get('button');
    }
    fillEmailInput(email) {
        this.emailInput.type(email)
    }
    fillPasswordInput(password) {
        this.passwordInput.type(password)
    }
    clickSubmitButton() {
        this.submitButton.click()
    }
    clearFields() {
        this.emailInput.clear();
        this.passwordInput.clear();
    }
    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }
}

export const loginPage = new LoginPage()