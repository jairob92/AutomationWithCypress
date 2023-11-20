import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../pages/Login";
import OpenWebPage from "../../pages/OpenWebPage";
import Menu from "../../pages/Menu";
const menu =new Menu()
const login=new Login();
const openWebPage = new OpenWebPage()

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
Given('User opens the browser and enters the home page',()=>{
    openWebPage.openBrowser()
})
Given('User enter username and password',(dataTable)=>{
    dataTable.hashes().forEach(row=>{
        login.setEmail(row.username)
        login.setPassword(row.password)
    })
  })
When ('User clicks on the LOGIN option',()=>{
    login.clickOnSubmitButton()
})
Then ('User successfully enters and view products',()=>{
    menu.viewMenuProducs()
})