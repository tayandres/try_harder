@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    
    Background:
    Given user navigates to the enrollment page 

    #TODO: Create scenarios that cover all the acceptance criteria
    Scenario: AC1: The next button should take customers to step 2 when given valid information.
        When I fill in the required fields
        When I click the next button
        Then I should see payment plan page