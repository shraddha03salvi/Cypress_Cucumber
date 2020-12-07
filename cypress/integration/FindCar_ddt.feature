Feature: Find car functionality with data driven testing
Scenario: To check Find Car Functionality
Given Launch the website
When User Select <pickUp> location from Search option
Then User click on Find car

Examples:
    | pickUp | 
    | Dubai  | 
    | London |
    |Paraburdoo|
    |George|
    
