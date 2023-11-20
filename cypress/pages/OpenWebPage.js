class OpenWebPage{
    openBrowser(){
        cy.visit('https://www.saucedemo.com/',)
        cy.title('eq','Swag Labs')
        cy.wait(1000)
    }
}
module.exports =OpenWebPage