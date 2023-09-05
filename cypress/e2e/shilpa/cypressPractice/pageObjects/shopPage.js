class ShopPage {
  // CSS path for both Shop page and Checkout page
  getSubmitBtn() {
    return cy.get(".btn");
  }
  getCheckOutBtn() {
    return cy.get("a.btn-primary");
  }
  getTotalAmount() {
    return cy.get("h3 strong");
  }
  getProductPrice() {
    return cy.get("td:nth-child(4) strong");
  }
}
export default ShopPage;
