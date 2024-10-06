@sep11
Feature: Program start dates and Refund dates

    As a customer, I want to see the program start dates and refund policy details before enrolling 
    so that I can make informed decisions.

    #* AC1: Program Start date and refund dates must be displayed in Step 1 in Test Automation with Selenium Program.

    
   
   
   
    #TODO: Create scenarios that cover all the acceptance criteria
Background: 
Given user navigates to the enrollment page


Scenario: As a customer, I want to see the program start dates and refund policy details before enrolling so that I can make informed decisions.
#Then I see the url to contain ""
Then I see the program start date details are displayed
Then I see the refund policy date details are displayed


Scenario: Verify that the progman dates are correct
Then I see the program start date is in the correct format
Then I see the refund policy date is in the correct format
