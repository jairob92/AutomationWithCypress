class CheckoutPage {

    getShopLocators() {
        return require("../locators/ShopCart");
      }
  clickOnCheckoutBtn() {
    cy.get(this.getShopLocators().CHECKOUT_BUTTON).should("be.visible").click();
    cy.wait(1000)
  }

  viewProcutInCart() {
    cy.get(this.getShopLocators().PRODUCTO_NAME).should("be.visible")
    cy.wait(1000)
  }
}
module.exports = CheckoutPage;