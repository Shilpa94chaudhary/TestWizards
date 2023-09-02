/// <reference types="cypress" />

describe("Greenkart test cases", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  });

  it("Search and check result", () => {
    // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(3000);

    // If there is a hiden element we have to add that as well
    cy.get(".product").should("have.length", 5);

    // if there is any element with same class but element is hidden then we can use ':visible' key word
    cy.get(".product:visible").should("have.length", 4);

    // Find element using nested class CSS selector
    cy.get(".products .product").should("have.length", 4);

    // Parent child chaining, select target
    // Check the number of products searched
    cy.get(".products").find(".product").should("have.length", 4);
  });

  it("Search and add item to cart", () => {
    // Give input for search
    cy.get(".search-keyword").type("ca");
    cy.wait(3000);

    // Parent child chaining
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
  });

  it("Search with keyword ca and add Cashews to cart", () => {
    cy.get(".search-keyword").type("ca");
    cy.wait(3000);

    // Find product with 'Cashews' product name and add it to the cart
    // .each is used to access each child of .products and verify which child have product name 'Cashews'
    cy.get(".products")
      .find(".product")
      .each(($element, index, $list) => {
        const productName = $element.find("h4.product-name").text();

        cy.log(index);
        cy.log($element.find("h4.product-name").text());

        // To add item using Index
        cy.get(".products")
          .find(".product")
          .eq(index)
          .contains("ADD TO CART")
          .click();

        if (productName.includes("Cashews")) {
          cy.wrap($element).find("button").click();
        }
      });
  });

  it("Get logo name and print in console", () => {
    // If we directly save the element into a variable then cypress will not handle it and throught an error
    // logoName.text is not a function
    // We have written non cypress code so we have to use then() method to handle it
    // const logoName = cy.get(".brand");
    // cy.log(logoName.text());

    // Non cypress commants cannot resolve promise by themselves. We need to manually resolve it by then()

    // We have to handle it by using then method and save element into logoElement
    cy.get(".brand").then(function (logoElement) {
      cy.log(logoElement.text());
    });

    // Log Green logo and Red logo
    cy.get(".greenLogo").then(function (greenLogoElement) {
      // Print GREENKART as .greenLogo is class for GREEN and span in it
      cy.log(greenLogoElement.text());
    });
    cy.get(".redLogo").then(function (redLogoElement) {
      // Print KART
      cy.log(redLogoElement.text());
    });

    // cy.get(...).text is not a function, because text() is jQuery not cypress method
    // cy.get(".redLogo").text();
  });

  it("Save locator in variable and use variable to access", () => {
    // Use as() method so save locator in variable and then use it every where
    // If the code change for the page we need not to update the locator every where
    // just update it once
    // alias to reuse locator
    cy.get(".products").as("productLocator");

    // Use variable to run test
    cy.get("@productLocator").find(".product").should("have.length", 30);
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click();

    // Search and add item to card
    cy.get(".search-keyword").type("berry");
    cy.wait(3000);

    // Use variable
    cy.get("@productLocator")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click();
  });

  it("Assertion", () => {
    // assert if logo text is correct or not
    cy.get(".brand").should("have.text", "GREENKART");
  });

  it("Add product to card and go to cart", () => {
    // Search for 'Ca'
    cy.get(".search-keyword").type("ca");
    cy.wait(3000);
    // search for 'Cashews' in filtered option
    cy.get(".products")
      .find(".product")
      .each(($element, index, $list) => {
        const productName = $element.find("h4.product-name").text();
        if (productName.includes("Cashews")) {
          cy.wrap($element).find("button").click();
        }
      });

    // Click on cart icon to open popup
    cy.get(".cart-icon").find("img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.wait(2000);
    // Click on Place Order button
    cy.contains("Place Order").click();
  });

  it("Add a item multiple time", () => {
    // Click on button multiple times using for loop
    for (let i = 0; i < 4; i++) {
      cy.get(".products .product").eq(1).find(".increment").click();
    }

    cy.get(".products .product").eq(0).find(".increment").click();

    // Using times function
    times(5, () => {
      cy.get(".products .product").eq(3).find(".increment").click();
    });
  });
});
