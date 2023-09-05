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

  it("Validate the validations and eror messages on the page and submit form", function () {
    // Check that minlength property is applied to Name input box
    cy.get("div.form-group:nth-child(1) input").should(
      "have.attr",
      "minlength",
      "2"
    );

    // Check the error message when user enter less that 2 character in Name input box
    cy.get("form .form-group:nth-child(1) :nth-child(2)").type("a");
    cy.get("body").click();
    cy.get("div.form-group:nth-child(1) div.alert.alert-danger").should(
      "be.visible"
    );

    // Validate error message
    cy.get("div.form-group:nth-child(1) div.alert.alert-danger").should(
      "have.text",
      "Name should be at least 2 characters"
    );
    cy.get("div.form-group:nth-child(1) input").clear();

    // Validate that Entrepreneur radio button is disabled or not
    cy.get("#inlineRadio3").should("be.disabled");

    // Check validation error message in email input field
    cy.get(".form-group:nth-child(2) input").click();
    cy.get("body").click();
    cy.get(".form-group:nth-child(2) .alert").should("be.visible");
    cy.get(".form-group:nth-child(2) .alert").should(
      "have.text",
      "Email is required"
    );

    // Fill form
    cy.get("form .form-group:nth-child(1) :nth-child(2)").type(this.data.name);
    cy.get("select").select(this.data.gender);
    cy.get(".form-group:nth-child(2) input").type(this.data.email);
    cy.get("form .form-group:nth-child(3) :nth-child(2)").type(
      this.data.password
    );
    cy.get('.form-check [type="checkbox"]').check();
    cy.get("#inlineRadio1").check();

    // Check if the name entered in the name input box is filled in 'Two-way Data Binding example' input field or not
    cy.get("input.ng-valid").should("have.value", this.data.name);

    // Verify the success message when user Submit the form
    cy.get(".btn").click();
    cy.get("div.alert:nth-child(1)").should("be.visible");
    // Validate success message
    // invoke('text') is used to extract the text content of the element.
    // .as('messageText') creates an alias named 'messageText' for the extracted text content.

    // Call to custom command
    cy.compareMessage(this.data.formSubmitSuccessMessage);

    // cy.get("div.alert:nth-child(1)").invoke("text").as("successMessage");
    // cy.get("@successMessage").then((message) => {
    //   // const successMessage = message.replace(/\n+/g, " ").trim();
    //   // const successMessage = message.replace("×", "").trim();
    //   const successMessage = message.replace(/^\s*×\s*/, "").trim();
    //   const expectedMessage =
    //     "Success! The Form has been submitted successfully!.";

    //   expect(successMessage).to.equal(expectedMessage);
    // });
  });

  it("Custom command to add product to cart", function () {
    cy.get(".nav-item:nth-child(2)").click();

    // Function to add Blackberry product into the cart
    // Add this function to commands.js as custom command
    /*
    cy.get(".card").each(($el, index, $list) => {
      if ($el.text().includes("Blackberry")) {
        cy.get(".btn.btn-info").eq(index).click();
      }
    });
    */

    // Call to the custom command created in commands.js file
    // Negative test caseOppo is not added to the cart as there is no product name Oppo
    cy.addProduct("Oppo");
    cy.addProduct("Nokia Edge");
    cy.addProduct("iphone X");

    // If we want to run addProduct command form multiple product names
    this.data.productName.forEach(function (name) {
      cy.addProduct(name);
    });
  });

  it("Test debugging using pause() or debug(), log in Cypress console", function () {
    // We can pause the test run in-between to check why the test is failing at a perticular line
    // Fill form
    cy.get("form .form-group:nth-child(1) :nth-child(2)").type(this.data.name);
    cy.get("select").select(this.data.gender);

    /* Test Paused, we can run rest of code by clicking on Resume button in Test Window */
    // cy.pause();

    cy.get(".form-group:nth-child(2) input").type(this.data.email);
    cy.get("form .form-group:nth-child(3) :nth-child(2)").type(
      this.data.password
    );

    /* To use debug command, give the command with the cypress command as follow */

    cy.get('.form-check [type="checkbox"]').check().debug();
    cy.get("#inlineRadio1").check();

    // Verify the success message when user Submit the form
    cy.get(".btn").click();

    // Log in Cypress console instead of Browser console
    cy.get("div.alert:nth-child(1)").invoke("text").as("successMessage");
    cy.get("@successMessage").then((message) => {
      cy.log(message);
    });
  });

  it("Use of page objects", function () {
    const homePage = new HomePage();
    homePage.getNameInputBox().type(this.data.name);
    homePage.getGenderInputBox().select(this.data.gender);
    homePage.getEmailInputBox().type(this.data.email);
    homePage.getPasswordInputBox().type(this.data.password);
    homePage.getCheckBox().check();
    homePage.getStudentEmployementRadioBtn().check();
    homePage.getDOB().type(this.data.dob);
    homePage.getSubmitBtn().click();
    cy.compareMessage(this.data.formSubmitSuccessMessage);
  });
  it.only("Add item to cart and check total amount", function () {
    const homePage = new HomePage();
    const shopPage = new ShopPage();
    homePage.getShopLink().click();
    this.data.productName.forEach(function (element) {
      cy.addProduct(element);
    });
    // Go to cart
    let totalAmount = 0;
    shopPage.getCheckOutBtn().click();
    shopPage
      .getProductPrice()
      .each(($el, index, $list) => {
        const amount = $el.text();
        var price = amount.split(" ");
        price = price[1];
        totalAmount = Number(price) + Number(totalAmount);
      })
      .then(function () {
        shopPage.getTotalAmount().then(function (element) {
          const price = element.text();
          var finalPrice = price.split(" ");
          finalPrice = Number(finalPrice[1]);
          expect(finalPrice).to.equal(totalAmount);
        });
      });
  });
});
