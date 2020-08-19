Feature: Find Car page
Scenario: Verify Find Car page functionality
Given User Select pickUp location from Search option
And User Select DropOff Location from Search option
When User select PickUp Date and Time
And User Select DropOff Date and Time
Then User click on Find Car Button and Navigate to Listing page