/// <reference types="cypress" />
describe("Frameworks in cypress", function () {
  before(function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.fixture("example").then(function (data) {
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
    cy.get("div.alert:nth-child(1) strong").should("have.text", "Success!");
  });

  it.only("Custom command to add product to cart", function () {
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
  });
});
