// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import HomePage from "../e2e/shilpa/cypressPractice/pageObjects/homePage";

// This command is to add product to the cart with given parameter productName
Cypress.Commands.add("addProduct", (productName) => {
  cy.get(".card").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.get(".btn.btn-info").eq(index).click();
    }
  });
});

// Function to compare success message
Cypress.Commands.add("compareSuccessMessage", (expectedMessage) => {
  const homepage = new HomePage();
  homepage.getFormSubmitSuccessMessage().invoke("text").as("successMessage");
  cy.get("@successMessage").then((message) => {
    const actualMessage = message.replace(/^\s*×\s*/, "").trim();
    expect(actualMessage).to.equal(expectedMessage);
  });
});

// Function to compare Name field error message
Cypress.Commands.add("compareNameErrorMessage", (expectedMessage) => {
  const homepage = new HomePage();
  homepage.getNameFieldErrorMessage().invoke("text").as("successMessage");
  cy.get("@successMessage").then((message) => {
    const actualMessage = message.replace(/^\s*×\s*/, "").trim();
    expect(actualMessage).to.equal(expectedMessage);
  });
});

// Function to compare Email field error message
Cypress.Commands.add("compareEmailErrorMessage", (expectedMessage) => {
  const homepage = new HomePage();
  homepage.getEmailFieldErrorMessage().invoke("text").as("successMessage");
  cy.get("@successMessage").then((message) => {
    const actualMessage = message.replace(/^\s*×\s*/, "").trim();
    expect(actualMessage).to.equal(expectedMessage);
  });
});
