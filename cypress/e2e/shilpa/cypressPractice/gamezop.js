describe("", () => {
  beforeEach(() => {});

  it("Select language", () => {
    cy.visit("https://play.gamezop.com/en/get-started/category-selection");
    cy.get(".style_arrow_wrapper__SDVME").click();
    cy.wait(2000);
    cy.get(".style_language_list_wrapper__Lex4R")
      .find("li")
      .each(($element) => {
        const langName = $element.find(".flex > span").text();
        cy.log(langName);
        if (langName.includes("ಕನ್ನಡ")) {
          cy.wrap($element).click();
        }
      });
    cy.reload();
  });

  it("Select language from dropdown using contain", () => {
    cy.visit("https://play.gamezop.com/en/get-started/category-selection");
    cy.get(".style_arrow_wrapper__SDVME").click();
    cy.contains("ಕನ್ನಡ").click();
  });

  it("Select language using select function", () => {
    cy.visit("https://play.gamezop.com/en/get-started/category-selection");
    cy.wait(2000);

    // Select language using select function()
    cy.get(".pl-22").select("ಕನ್ನಡ").should("have.value", "ಕನ್ನಡ");
  });
});
