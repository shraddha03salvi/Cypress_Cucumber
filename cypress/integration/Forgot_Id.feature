Feature: Forgot Your Booking ID
Scenario: To check "Forgot Your Booking ID" functionality
Given User must be on Home page of WebSite and click on Manage Booking Option
When User click on Forgot Your Booking ID link 
And User navigate to "Forgot Your Booking ID" Page and Enter Email Address in Text field
And User click on Submit Button and "Email Sent.please check your inbox" message is display
Then User click on Back Button and Naviagte to "Manage Booking" page

