@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.
Background:
    Given user navigates to the enrollment page 
    #When I fill in the required fields
    #When I click the next button
     Then I see the program start date is in the correct format
     Then I see the refund policy date is in the correct format


    #TODO: Create scenarios that cover all the acceptance criteria
    Scenario: user sees all the available products on start application page
    Then user sees course title
    Then user sees upfront cost saving
    Then user sees flexible payments plan 
    #Then I see the program start date is in the correct format
    And user sees the refund policy
   # Then I see the refund policy date is in the correct format

    
    