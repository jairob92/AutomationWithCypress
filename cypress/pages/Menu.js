class Menu {

    getMenuLocators() {
        return require("../locators/Menu");
      }
    viewMenuProducs(){
        cy.get(this.getMenuLocators().TITLE_MENU).should('be.visible')
        cy.wait(1000)
    }
    checkProducts(){
        cy.get(this.getMenuLocators().PRODUCTO_NAME).should('be.visible')
        cy.wait(1000)
    }
    AddProduct(){
        cy.get(this.getMenuLocators().ADD_PRODUCTO).should('be.visible').click()
        cy.wait(1000)
    }
    clickOnShoppingCart(){
        cy.get(this.getMenuLocators().SHOPPING_CAR).should('be.visible').click()
        cy.wait(1000)
    }
    viewMenuOptions(){
        cy.get(this.getMenuLocators().BURGUER_MENU).should('be.visible').click()
        cy.wait(1000)
    }
    clickOnLogout(){
        cy.get(this.getMenuLocators().LOGOUT_OPTION).should('be.visible').click()
        cy.wait(1000)
    }
    viewLogoutOption(){
        cy.get(this.getMenuLocators().BURGUER_MENU).should('be.visible')
        cy.wait(1000)
    }
}
module.exports= Menu