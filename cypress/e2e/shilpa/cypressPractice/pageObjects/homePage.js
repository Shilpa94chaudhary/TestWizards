class HomePage {
  // Create objects for the homepage
  getHomeLink() {
    return cy.get("li:nth-child(1) a");
  }
  getHomeBody() {
    return cy.get("body");
  }
  getShopLink() {
    return cy.get("li:nth-child(2) a");
  }
  getNameInputBox() {
    return cy.get("form .form-group:nth-child(1) :nth-child(2)");
  }
  getEmailInputBox() {
    return cy.get(".form-group:nth-child(2) input");
  }
  getPasswordInputBox() {
    return cy.get("form .form-group:nth-child(3) :nth-child(2)");
  }
  getCheckBox() {
    return cy.get('.form-check [type="checkbox"]');
  }
  getGenderInputBox() {
    return cy.get("select");
  }
  getStudentEmployementRadioBtn() {
    return cy.get("#inlineRadio1");
  }
  getEmployedEmployementRadioBtn() {
    return cy.get("#inlineRadio2");
  }
  getEmployedEntrepreneurRadioBtn() {
    // Entrepreneur (disabled)
    return cy.get("#inlineRadio3");
  }
  getSubmitBtn() {
    return cy.get(".btn");
  }
  getDOB() {
    return cy.get('input.form-control[name="bday"]');
  }
  getFormSubmitSuccessMessage() {
    return cy.get("div.alert.alert-success");
  }
  getSuccessCrossButton() {
    return cy.get("div.alert-success a");
  }
  getNameFieldErrorMessage() {
    return cy.get("div.form-group:nth-child(1) div.alert");
  }
  getEmailFieldErrorMessage() {
    return cy.get("div.form-group:nth-child(2) div.alert");
  }
  getTwoWayData() {
    return cy.get("h4 input");
  }
}
export default HomePage;
