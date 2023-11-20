class CheckoutComplete {

    getCheckoutCompleteLocators() {
        return require("../locators/CheckoutComplete");
      }
  viewConfirmationMsg() {
    cy.get(this.getCheckoutCompleteLocators().MESSAGE_CONFIRMATION).should("be.visible")
    cy.wait(1000)
  }
}
module.exports = CheckoutComplete;