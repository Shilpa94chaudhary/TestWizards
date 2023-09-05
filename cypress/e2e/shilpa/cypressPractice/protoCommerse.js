/// <reference types="cypress" />
import HomePage from "./pageObjects/homePage";
import ShopPage from "./pageObjects/shopPage";

describe("Frameworks in cypress", function () {
  beforeEach(function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.fixture("userData").then(function (data) {
      // Alias the data to make it available in all tests
      cy.wrap(data).as("userData");
    });
  });

  it("Homapage validations", function () {
    const homePage = new HomePage();
    // Check name field - error message, min-length
    homePage.getNameInputBox().click();
    homePage.getHomeBody().click();
    homePage.getNameInputBox().should("have.attr", "minlength", "2");
    homePage.getNameFieldErrorMessage().should("be.visible");
    cy.compareNameErrorMessage(this.userData.nameFieldErrorMessage);
    homePage.getNameInputBox().type(this.userData.name);
    homePage.getTwoWayData().should("have.value", this.userData.name);

    // Check email field - error message
    homePage.getEmailInputBox().click();
    homePage.getHomeBody().click();
    homePage.getEmailFieldErrorMessage().should("be.visible");
    cy.compareEmailErrorMessage(this.userData.emailFieldErrorMessage);
    homePage.getEmailInputBox().type(this.userData.email);

    // Data Input in form
    homePage.getPasswordInputBox().type(this.userData.password);
    homePage.getCheckBox().check();
    homePage.getGenderInputBox().select(this.userData.gender);
    homePage.getEmployedEmployementRadioBtn().click();
    homePage.getDOB().type(this.userData.dob);

    // Submit form check success message, click on cross message should disappear
    homePage.getSubmitBtn().click();
    homePage.getFormSubmitSuccessMessage().should("be.visible");
    homePage.getFormSubmitSuccessMessage().then(function (message) {
      const actualMessage = message.text();
      expect(actualMessage.includes("Success")).to.be.true;
    });
    // Set timeout to 8 sec - custom timeout
    Cypress.config("defaultCommandTimeout", 8000);
    cy.compareSuccessMessage(this.data.formSubmitSuccessMessage);
    homePage.getSuccessCrossButton().click();
    homePage.getFormSubmitSuccessMessage().should("not.exist");
  });

  it("Add item to cart and checkout", function () {
    const shopPage = new ShopPage();
  });
});
