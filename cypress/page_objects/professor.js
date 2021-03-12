class Professor {

    get professorBtn() {
        return cy.get('a[href="/gradebooks#"]');
    }
    get createProfBtn() {
        return cy.get('a[href="/create-professor"]');
    }
    get firstName() {
        return cy.get("#firstName");
    }
    get lastName() {
        return cy.get("#lastName");
    }
    get addImg() {
        return cy.get('div#app div.mt-3.mb-2 > button');
    }
    get imgUrl() {
        return cy.get('input[name="image_NaN"]');
    }
    get submitImg() {
        return cy.get('button[type="submit"]');
    }
    clickProfBtn() {
        this.professorBtn.click();
    }
    clickCreateProf() {
        this.createProfBtn.click();
    }
    fillFirstName(fName) {
        this.firstName.type(fName);
    }
    fillLastName(lName) {
        this.lastName.type(lName);
    }
    clickAddImg() {
        this.addImg.click();
    }
    fillImgUrl(img) {
        this.imgUrl.type(img);
    }
    clickSubmit() {
        this.submitImg.click();
    }
}

export const professor = new Professor()