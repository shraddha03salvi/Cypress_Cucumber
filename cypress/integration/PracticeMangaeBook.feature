Feature: Manage Booking

    Feature Description: Manage Booking Feature
    Scenario: To check Manage booking Functionality
    Given User must be on Home page of WebSite
    When User click on Manage Booking option 
<<<<<<< HEAD
    And Enter 
          |email                      |Booking_ID|
          |shraddha.dhatavkar@beno.com|GD201210002|
          |dhatavkarshraddha@gmail.com|GD201214004|
    Then User click on submit and User should navigate to Booking ID page
   
   
    
    
=======
    And Enter <Email_Address> and <Booking_Id>
    Then User click on submit and User should navigate to Booking ID page

    Examples:
        | Email_Address              | Booking_Id |
        | dhatavkarshraddha@gmail.com| GD201210003| 
        | shraddha.dhatavkar@beno.com| GD201210002|
>>>>>>> fe04e8dcd365c68121950bca9ea82abd32d8f92e
