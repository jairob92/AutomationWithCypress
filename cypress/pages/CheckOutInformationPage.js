class CheckoutInformation {
    getCheckoutInformationLocators() {
      return require("../locators/CheckoutInformation");
    }
  
    setName(firstname) {
      cy.get(this.getCheckoutInformationLocators().FIRSTNAME)
        .should("be.visible")
        .type(firstname);
      cy.wait(1000);
    }
  
    setLastName(lastname) {
      cy.get(this.getCheckoutInformationLocators().LASTNAME)
        .should("be.visible")
        .type(lastname);
      cy.wait(1000);
    }
    setPostalCode(postalcode) {
      cy.get(this.getCheckoutInformationLocators().ZIPCODE)
        .should("be.visible")
        .type(postalcode);
      cy.wait(1000);
    }
    continueToPayment() {
      cy.get(this.getCheckoutInformationLocators().CONTINUE_BUTTON)
        .should("be.visible").click();
      cy.wait(1000);
    }
  }
  module.exports = CheckoutInformation;