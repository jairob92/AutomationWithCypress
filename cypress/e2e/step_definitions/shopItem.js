import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../pages/Login";
import OpenWebPage from "../../pages/OpenWebPage";
import Menu from "../../pages/Menu";
import CheckoutPage from "../../pages/CheckOutPage";
import CheckoutInformation from "../../pages/CheckOutInformationPage";
import CheckoutOverview from "../../pages/CheckOutOverviewPage";
import CheckoutComplete from "../../pages/CheckOutComplete";
const checkOutComplete = new CheckoutComplete();
const checkOutOverview = new CheckoutOverview();
const checkOutInformation = new CheckoutInformation();
const checkOutPage = new CheckoutPage();
const menu = new Menu();
const login = new Login();
const openWebPage = new OpenWebPage();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
Given("User opens the browser", () => {
  openWebPage.openBrowser();
});
Given("User enter with username and password", (dataTable) => {
  dataTable.hashes().forEach((row) => {
    login.setEmail(row.username);
    login.setPassword(row.password);
  });
});
When("User clicks on the LOGIN button", () => {
  login.clickOnSubmitButton();
});
Then("User enters and view products", () => {
  menu.viewMenuProducs();
});
Then("Validate that Labs Backpack product is available", () => {
  menu.checkProducts();
});
Then("Select product", () => {
  menu.AddProduct();
});
Then("Click on the cart icon", () => {
  menu.clickOnShoppingCart();
});
Then("Validate that the product is in the cart", () => {
  checkOutPage.viewProcutInCart();
});
Then("Click on the checkout button", () => {
  checkOutPage.clickOnCheckoutBtn();
});
Then("Type your personal information", (dataTable) => {
  dataTable.hashes().forEach((row) => {
    checkOutInformation.setName(row.firstname);
    checkOutInformation.setLastName(row.lastname);
    checkOutInformation.setPostalCode(row.zipcode);
  });
});
Then("Click on continue", () => {
  checkOutInformation.continueToPayment();
});

Then("View payment information", () => {
  checkOutOverview.viewPaymentInformation();
  checkOutOverview.viewShippingInformation();
});

Then("Click on finish", () => {
  checkOutOverview.continueToFinish();
});
Then("View the purchase confirmation message", () => {
  checkOutComplete.viewConfirmationMsg();
});
