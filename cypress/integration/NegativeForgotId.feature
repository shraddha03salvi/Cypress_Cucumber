
Feature: Manage Booking
Feature Description: Forgot Your booking ID
    Scenario: To check Forgot Your booking ID Functionality without data
     Given User must be on Home page of WebSite and click on Manage Booking Option
      When User click on Forgot Your Booking ID link 
     And User navigate to Forgot Your Booking ID Page and keep  Email Address Text field as Blank
     And User click on Submit Button
     Then User should get error message
     
