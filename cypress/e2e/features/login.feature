Feature: Login registered users into the system

    Validate the login functionality for registered users on the automation practice page

    Background: Visit home page
        Given User opens the browser and enters the home page

    @correct_user
    Scenario: Successfull login
        Given User enter username and password
            | username      | password  |
            | standard_user | secret_sauce |
        When User clicks on the LOGIN option
        Then User successfully enters and view products