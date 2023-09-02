/// <reference types="cypress" />
import HomePage from "./pageObjects/homePage";
import ShopPage from "./pageObjects/shopPage";

describe("Frameworks in cypress", function () {
  beforeEach(function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.fixture("userData").then(function (data) {
      this.data = data;
    });
  });
  it.only("Homapage validations", function () {
    const homePage = new HomePage();
    // Check name field - error message, min-length
    homePage.getNameInputBox().click();
    homePage.getHomeBody().click();
    homePage.getNameInputBox().should("have.attr", "minlength", "2");
    homePage.getNameFieldErrorMessage().should("be.visible");
    cy.compareNameErrorMessage(this.data.nameFieldErrorMessage);
    homePage.getNameInputBox().type(this.data.name);
    homePage.getTwoWayData().should("have.value", this.data.name);

    // Check email field - error message
    homePage.getEmailInputBox().click();
    homePage.getHomeBody().click();
    homePage.getEmailFieldErrorMessage().should("be.visible");
    cy.compareEmailErrorMessage(this.data.emailFieldErrorMessage);
    homePage.getEmailInputBox().type(this.data.email);

    // Data Input in form
    homePage.getPasswordInputBox().type(this.data.password);
    homePage.getCheckBox().check();
    homePage.getGenderInputBox().select(this.data.gender);
    homePage.getEmployedEmployementRadioBtn().click();
    homePage.getDOB().type(this.data.dob);

    // Submit form check success message, click on cross message should disappear
    homePage.getSubmitBtn().click();
    homePage.getFormSubmitSuccessMessage().should("be.visible");
    cy.compareSuccessMessage(this.data.formSubmitSuccessMessage);
    homePage.getSuccessCrossButton().click();
    homePage.getFormSubmitSuccessMessage().should("not.exist");
  });
});
