@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.
    Background:
    Given user navigates to the enrollment page 
   # When I fill in the required fields
    # When I click the next button

    #TODO: Create scenarios that cover all the acceptance criteria

    Scenario: User verifies the steps are correct
        Then user sees the step for the Start Application process
        Then user sees the step for the Payment Plan process
        Then user sees the step for the Review process