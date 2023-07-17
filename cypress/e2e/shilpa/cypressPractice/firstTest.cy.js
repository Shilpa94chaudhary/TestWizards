/// <reference types="cypress" />
describe("Test page load",()=>{
    it("Go to ",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.wait(5000);
        cy.get(":nth-child(1) > .product-action > button").click();
        cy.get(":nth-child(1) > .stepper-input > .increment").click();
    });
    it("",()=>{

    });
    });