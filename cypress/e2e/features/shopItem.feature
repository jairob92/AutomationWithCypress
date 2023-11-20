Feature: Buy products

    Log a user successfully and select purchase item to make payment 

   Background: Visit home page
        Given User opens the browser

    @buy_product
    Scenario: Log user and buy any product
        Given User enter with username and password
            | username      | password  |
            | standard_user | secret_sauce |
        When User clicks on the LOGIN button
        Then User enters and view products
        Then Validate that Labs Backpack product is available
        Then Select product
        Then Click on the cart icon
        Then Validate that the product is in the cart
        Then Click on the checkout button
        Then Type your personal information
            | firstname      | lastname  | zipcode |
            | jairo          | daniel    | 68001   |
        Then Click on continue
        Then View payment information
        Then Click on finish
        Then View the purchase confirmation message