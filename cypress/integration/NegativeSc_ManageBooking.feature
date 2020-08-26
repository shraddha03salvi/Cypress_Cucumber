Feature: Manage Booking

    
    Scenario: To check Manage booking Functionality with no input
    Given User must be on Home page of WebSite
    When User click on Manage Booking option 
    And keep Blank Email address text field
    Then User click on submit and User should get Error message
    