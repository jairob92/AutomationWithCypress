
class Login{
  
  getHomePageLocators() {
    return require("../Locators/HomePage");
  }
    setEmail(username) {
        cy.get(this.getHomePageLocators().LOGIN_USERNAME).should("be.visible").type(username);
      }
    setPassword(password) {
        cy.get(this.getHomePageLocators().LOGIN_PASSWORD).should("be.visible").type(password);
      }
    clickOnSubmitButton() {
        cy.get(this.getHomePageLocators().LOGIN_BUTTON).should("be.visible").click();
        cy.wait(1000);
      }
      checkHomePage(){
        cy.get(this.getHomePageLocators().TITLE_PAGE).should("be.visible").click();
        cy.wait(1000);
      }
    }
    module.exports =Login