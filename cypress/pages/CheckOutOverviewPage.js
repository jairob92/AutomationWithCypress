class CheckoutOverview {
    getCheckoutOverviewLocators() {
      return require("../locators/CheckoutOverview");
    }
  
    viewPaymentInformation() {
      cy.get(this.getCheckoutOverviewLocators().PAYMENT_INFORMATION).should("be.visible")
      cy.wait(1000);
    }
  
    viewShippingInformation() {
        cy.get(this.getCheckoutOverviewLocators().SHIPPING_INFORMATION).should("be.visible")
        cy.wait(1000);
      }
    continueToFinish() {
      cy.get(this.getCheckoutOverviewLocators().FINISH_BUTTON)
        .should("be.visible")
        .click();
      cy.wait(1000);
    }
  }
  module.exports = CheckoutOverview;