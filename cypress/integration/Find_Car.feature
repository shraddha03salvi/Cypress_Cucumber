Feature: Home Page that is Find Car

    Feature Description: Select Pick-Up location, Drop-Off Location, Pick-Up Date, Drop-Off Date ,
    Pick-Up time and Drop-off time
    Scenario: To check Find Car Functionality is working or not
        Given User Select pickUp location from Search option
        And User Select DropOff Location from Search option
        When User select PickUp Date and DropOff Date
        And User Select PickUp Time and  Drop-off Time
        Then User click on Find Car Button and Navigate to Listing page
