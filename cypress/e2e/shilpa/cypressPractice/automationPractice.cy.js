/// <reference types="cypress" />

describe("Automation Practice website test cases", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("Click on multiple checkboxes", () => {
    // Check multiple options
    cy.get('input[type="checkbox"]')
      .check(["option2", "option3"])
      .should("be.checked");
    // Check and verify that correct option is checked or not
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    // Uncheck multiple options
    cy.get('input[type="checkbox"]')
      .uncheck(["option1", "option2"])
      .should("not.be.checked");
  });

  it("Static dropdown", () => {
    // Select value from static dropdown using select() function
    cy.get("select").select("option1").should("have.value", "option1");
  });

  it("Select option from dynamic dropdown - autocomplete", () => {
    // Give input to input box so user can get options
    cy.get("#autocomplete").type("ind");

    // Run each loop to access each and every element in dropdown
    cy.get("#ui-id-1 .ui-menu-item div").each(($el, index) => {
      const countryName = $el.text();
      cy.log(countryName);
      if (countryName == "India") {
        cy.wrap($el).click();
      }
    });
  });

  it("Handling visible and invisible element", () => {
    // Chek if the input box is visible initially or not
    cy.get("#displayed-text").should("be.visible");
    // Hide the input box by clicking on Hide button
    cy.get("#hide-textbox").click();
    // Check if the input box hide or not
    cy.get("#displayed-text").should("not.be.visible");
    // Unhide the input box by clicking on Show button
    cy.get("#show-textbox").click();
    // Chek if the input box is visible initially or not
    cy.get("#displayed-text").should("be.visible");
  });

  it("Radio button", () => {
    // Select radio button using tagname-attribute combination tag is input, and attribute is value which is unique
    cy.get('input[value="radio1"]').click().should("be.checked");

    // Check if all other radio buttons are unchecked or not
    cy.get('input[value="radio2"]').should("not.be.checked");
    cy.get('input[value="radio3"]').should("not.be.checked");

    // Check the radio button
    cy.get('input[value="radio2"]').check().should("be.checked");

    // Check if all other radio buttons are unchecked or not
    cy.get('input[value="radio1"]').should("not.be.checked");
    cy.get('input[value="radio3"]').should("not.be.checked");
  });

  it("Alert or confirmation popup", () => {
    // Click on Alert button
    cy.get("#alertbtn").click();

    // Validate the text on the alert using window:alert
    cy.on("window:alert", (alertMsg) => {
      expect(alertMsg).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    // Click on Confirm button
    cy.get('[value="Confirm"]').click();
    cy.on("window:confirm", (confirmMsg) => {
      expect(confirmMsg).be.equal("Hello , Are you sure you want to confirm?");
    });
  });

  it("Open the link with target value _blank, in same window by manipulating ", () => {
    // Invoke the jQuery function to remove the attribute which open the link in new tab
    // by using invoke command

    // .invoke will invoke jquery function removeAttr to remove target attribute from the button
    cy.get("#opentab").invoke("removeAttr", "target").click();
  });

  it("Navigate back to previous page", () => {
    cy.url().should("include", "AutomationPractice");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "qaclickacademy");
    cy.go("back");
    cy.url().should("include", "AutomationPractice");
    cy.go("forward");
  });

  it("Handle web tables with cypress", () => {
    cy.get(".table-display tr td:nth-child(2)").each(($el, index, $list) => {
      const courseName = $el.text();
      if (courseName.includes("Python Language")) {
        cy.get(".table-display tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });

  it("Handle mouse hover popups by .invoke('show') method", () => {
    // Apply .invoke("show") method on the parent of the hidden content
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");
  });

  it("Handle mouse hover popups by forcefully clicking on invisible element", () => {
    // Click on hidden element forcefully by using {force:tru}, it will click on invisible element
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
